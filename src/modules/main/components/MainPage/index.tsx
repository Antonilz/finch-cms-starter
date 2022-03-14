import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';

import { initApollo, addApolloState } from '~features/services';
import { MetaTags } from '~components/MetaTags';
import { HeadScripts, BodyScripts } from '~components/Metrics';
import { locales } from '~features/i18n';
import getPageData from '../../model/getPageData.graphql';
import getPageUrn from '../../model/getPageUrn.graphql';
import getWebConfigs from '../../model/getWebConfigs.graphql';
import {
  PageData,
  PageMenuTypes,
  MenuData,
  BlockTypes,
  ConfigData,
} from '../../types';
import { View } from '../View';
import { Hero } from '../Hero';
import { Block } from '../Block';
import { GlobalTheme } from '../GlobalTheme';

const getPageDataByUrn = (data: Array<PageData>) => data[0];

const getPageMenuData = (data: Array<MenuData>, locale: string) =>
  data.find(
    ({ code }) =>
      code ===
      `${locale !== locales.RU ? `${locale}/` : ''}${PageMenuTypes.MAIN}`
  )?.items;

const getHeadScripts = (configs: Array<ConfigData>) =>
  String.prototype.concat.apply(
    configs
      .map(({ headscript }) => headscript)
      .filter(Boolean)
      .concat()
  );

const getBodyScripts = (configs: Array<ConfigData>) =>
  String.prototype.concat.apply(
    configs.map(({ bodyscript }) => bodyscript).filter(Boolean)
  );

type MainPageProps = {
  pageData: Array<PageData>;
  menuData: Array<MenuData>;
  configs: Array<ConfigData>;
};

export function MainPage({ pageData, menuData, configs }: MainPageProps) {
  const {
    // query: { urn },
    locale = locales.RU,
    isFallback,
  } = useRouter();

  const data = getPageDataByUrn(pageData);

  if (!data || isFallback) {
    return <div>Loading...</div>;
  }

  const { title, description, image, blocks, article, black: dark } = data;

  const pageMenu = getPageMenuData(menuData, locale);
  const bodyScripts = getBodyScripts(configs);
  const headScripts = getHeadScripts(configs);

  return (
    <>
      <MetaTags title={title} description={description} image={image} />
      {headScripts && <HeadScripts text={headScripts} />}
      <View navLinks={pageMenu}>
        <GlobalTheme dark={dark} />
        {blocks.map(({ type, data: blockData }, index) => {
          if (type === BlockTypes.BLOCK) {
            return <Block key={index} compact={article} {...blockData} />;
          }

          if (type === BlockTypes.HERO) {
            return <Hero key={index} {...blockData} />;
          }

          // if (type === BlockTypes.FORM) {
          //   return (
          //     <FormBlock
          //       key={index}
          //       {...(blockData as PageBlock<BlockTypes.FORM>)}
          //     />
          //   );
          // }
          console.log(`No component found for type ${type}!`);
          return null;
        })}
      </View>
      {bodyScripts && <BodyScripts text={bodyScripts} />}
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const apolloClient = initApollo();
    const { params = {}, locale } = context;
    const urn = params.urn as string;
    /**
     * https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
     * We use an optional catch-all route, so Next.js will
     * statically generate the page /.
     */
    const pageUrn = urn ? urn[0] : '';

    const [pageDataResponse, configsDataResponse] = await Promise.all([
      apolloClient.query({
        query: getPageData,
        variables: {
          filters: [
            {
              field: 'urn',
              operator: 'EQUALS',
              value: `/${locale !== locales.RU ? `${locale}/` : ''}${pageUrn}`,
            },
          ],
        },
      }),
      apolloClient.query({
        query: getWebConfigs,
      }),
    ]);

    const configs = configsDataResponse.data.WebConfigQuery.list.documents;
    const pageData = pageDataResponse.data.FinchSitePageQuery.list.documents;
    const menuData = pageDataResponse.data.MenuQuery.list.documents;

    return addApolloState(apolloClient, {
      props: {
        pageData,
        menuData,
        configs,
      },
      revalidate: 30,
    });
  } catch (error) {
    console.log(error, 'Fetching initial props failed');
    return { props: {} };
  }
}

export async function getStaticPaths() {
  try {
    const apolloClient = initApollo();

    const response = await apolloClient.query({
      query: getPageUrn,
    });
    const result = response.data.FinchSitePageQuery.list
      .documents as Array<PageData>;

    const paths = result.map((page) => ({
      params: { urn: page.urn ? [page.urn] : null },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.log(error, 'Fetching initial paths failed');
    return { paths: [], fallback: false };
  }
}
