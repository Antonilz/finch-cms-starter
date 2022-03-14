import * as Types from '../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageDataQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.InputFilter>>
    | Types.InputMaybe<Types.InputFilter>
  >;
  page?: Types.InputMaybe<Types.Scalars['Int']>;
  pageSize?: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type PageDataQuery = {
  __typename?: 'Query';
  PageQuery: {
    __typename?: 'PageQuery';
    list: {
      __typename?: 'PageList';
      hasMore: boolean | null;
      totalCount: number | null;
      documents: Array<{
        __typename?: 'PageOut';
        title: string | null;
        description: string | null;
        url: string | null;
        image: string | null;
        blocks: any | null;
        isArticle: boolean | null;
      } | null> | null;
    } | null;
  } | null;
  MenuQuery: {
    __typename?: 'MenuQuery';
    list: {
      __typename?: 'MenuList';
      documents: Array<{
        __typename?: 'MenuOut';
        items: any | null;
        name: string | null;
      } | null> | null;
    } | null;
  } | null;
  ScriptConfigQuery: {
    __typename?: 'ScriptConfigQuery';
    list: {
      __typename?: 'ScriptConfigList';
      documents: Array<{
        __typename?: 'ScriptConfigOut';
        name: string | null;
        bodyScript: string | null;
        headScript: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export const PageDataDocument = /*#__PURE__*/ gql`
  query PageData($filters: [InputFilter], $page: Int, $pageSize: Int) {
    PageQuery {
      list(filters: $filters, page: $page, pageSize: $pageSize) {
        documents {
          title
          description
          url
          image
          blocks
          isArticle
        }
        hasMore
        totalCount
      }
    }
    MenuQuery {
      list {
        documents {
          items
          name
        }
      }
    }
    ScriptConfigQuery {
      list {
        documents {
          name
          bodyScript
          headScript
        }
      }
    }
  }
`;
export function usePageDataQuery(
  baseOptions?: Apollo.QueryHookOptions<PageDataQuery, PageDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageDataQuery, PageDataQueryVariables>(
    PageDataDocument,
    options
  );
}
export function usePageDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageDataQuery,
    PageDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageDataQuery, PageDataQueryVariables>(
    PageDataDocument,
    options
  );
}
export type PageDataQueryHookResult = ReturnType<typeof usePageDataQuery>;
export type PageDataLazyQueryHookResult = ReturnType<
  typeof usePageDataLazyQuery
>;
export type PageDataQueryResult = Apollo.QueryResult<
  PageDataQuery,
  PageDataQueryVariables
>;
