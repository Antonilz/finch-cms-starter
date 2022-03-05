import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../../__generated__/types';

const defaultOptions = {} as const;
export type PageDataQueryQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.InputFilter>>
    | Types.InputMaybe<Types.InputFilter>
  >;
}>;

export type PageDataQueryQuery = {
  __typename?: 'Query';
  FinchSitePageQuery:
    | {
        __typename?: 'FinchSitePageQuery';
        list:
          | {
              __typename?: 'FinchSitePageList';
              documents:
                | Array<
                    | {
                        __typename?: 'FinchSitePageOut';
                        description: string | null | undefined;
                        lead: any | null | undefined;
                        title: string | null | undefined;
                        image: string | null | undefined;
                        article: boolean | null | undefined;
                        blocks: any | null | undefined;
                        urn: string | null | undefined;
                        black: boolean | null | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  MenuQuery:
    | {
        __typename?: 'MenuQuery';
        list:
          | {
              __typename?: 'MenuList';
              documents:
                | Array<
                    | {
                        __typename?: 'MenuOut';
                        items: any | null | undefined;
                        code: string | null | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const PageDataQueryDocument = /* #__PURE__ */ gql`
  query PageDataQuery($filters: [InputFilter]) {
    FinchSitePageQuery {
      list(filters: $filters) {
        documents {
          description
          lead
          title
          image
          article
          blocks
          urn
          black
        }
      }
    }
    MenuQuery {
      list {
        documents {
          items
          code
        }
      }
    }
  }
`;
export function usePageDataQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PageDataQueryQuery,
    PageDataQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageDataQueryQuery, PageDataQueryQueryVariables>(
    PageDataQueryDocument,
    options
  );
}
export function usePageDataQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageDataQueryQuery,
    PageDataQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageDataQueryQuery, PageDataQueryQueryVariables>(
    PageDataQueryDocument,
    options
  );
}
export type PageDataQueryQueryHookResult = ReturnType<
  typeof usePageDataQueryQuery
>;
export type PageDataQueryLazyQueryHookResult = ReturnType<
  typeof usePageDataQueryLazyQuery
>;
export type PageDataQueryQueryResult = Apollo.QueryResult<
  PageDataQueryQuery,
  PageDataQueryQueryVariables
>;
