import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';

import { initApollo, addApolloState } from '~features/services';
import { MetaTags } from '~components/MetaTags';
import { HeadScripts, BodyScripts } from '~components/Metrics';
import { locales } from '~features/i18n';
import getPageData from '../../model/getPageData.graphql';
import getPageUrn from '../../model/getPageUrn.graphql';
import {
  PageData,
  PageMenuTypes,
  MenuData,
  BlockTypes,
  ConfigData,
} from '../../types';
import { View } from '../View';
import { Header } from '../Header';
import { Mosaic } from '../Mosaic';
import { ArticleList } from '../ArticleList';
import { ArticleText } from '../ArticleText';
import { GlobalTheme } from '../GlobalTheme';

const getPageDataByUrn = (data: Array<PageData>) => data[0];

const getPageMenuData = (data: Array<MenuData>, locale: string) =>
  data.find(
    ({ name }) =>
      name ===
      `${locale !== locales.RU ? `${locale}/` : ''}${PageMenuTypes.MAIN}`
  )?.items;

const getHeadScripts = (configs: Array<ConfigData>) =>
  String.prototype.concat.apply(
    configs
      .map(({ headScript }) => headScript)
      .filter(Boolean)
      .concat()
  );

const getBodyScripts = (configs: Array<ConfigData>) =>
  String.prototype.concat.apply(
    configs.map(({ bodyScript }) => bodyScript).filter(Boolean)
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
  console.log(pageData);
  const data = getPageDataByUrn(pageData);

  if (!data || isFallback) {
    return <div>Loading...</div>;
  }

  const { title, description, image, blocks, isArticle, black: dark } = data;

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
          if (type === BlockTypes.MOSAIC) {
            return <Mosaic key={index} compact={isArticle} {...blockData} />;
          }

          if (type === BlockTypes.HEADER) {
            return <Header key={index} {...blockData} />;
          }

          if (type === BlockTypes.ARTICLE_TEXT) {
            return <ArticleText key={index} {...blockData} />;
          }

          if (type === BlockTypes.ARTICLE_LIST) {
            return <ArticleList key={index} {...blockData} />;
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

    const { data } = await apolloClient.query({
      query: getPageData,
      variables: {
        filters: [
          {
            field: 'url',
            operator: 'EQUALS',
            value: `/${locale !== locales.RU ? `${locale}/` : ''}${pageUrn}`,
          },
        ],
      },
    });

    const configs = data.ScriptConfigQuery.list.documents;
    const pageData = data.PageQuery.list.documents;
    const menuData = data.MenuQuery.list.documents;

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
    const result = response.data.PageQuery.list.documents as Array<PageData>;

    const paths = result.map((page) => ({
      params: { urn: page.url ? [page.url] : null },
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
