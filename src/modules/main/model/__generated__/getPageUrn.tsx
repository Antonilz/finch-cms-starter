import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../../__generated__/types';

const defaultOptions = {} as const;
export type PageUrnQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PageUrnQueryQuery = {
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
                        urn: string | null | undefined;
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

export const PageUrnQueryDocument = /* #__PURE__ */ gql`
  query PageUrnQuery {
    FinchSitePageQuery {
      list {
        documents {
          urn
        }
      }
    }
  }
`;
export function usePageUrnQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PageUrnQueryQuery,
    PageUrnQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageUrnQueryQuery, PageUrnQueryQueryVariables>(
    PageUrnQueryDocument,
    options
  );
}
export function usePageUrnQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageUrnQueryQuery,
    PageUrnQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageUrnQueryQuery, PageUrnQueryQueryVariables>(
    PageUrnQueryDocument,
    options
  );
}
export type PageUrnQueryQueryHookResult = ReturnType<
  typeof usePageUrnQueryQuery
>;
export type PageUrnQueryLazyQueryHookResult = ReturnType<
  typeof usePageUrnQueryLazyQuery
>;
export type PageUrnQueryQueryResult = Apollo.QueryResult<
  PageUrnQueryQuery,
  PageUrnQueryQueryVariables
>;
