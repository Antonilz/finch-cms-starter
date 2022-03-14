import * as Types from '../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PageUrnQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PageUrnQuery = {
  __typename?: 'Query';
  PageQuery: {
    __typename?: 'PageQuery';
    list: {
      __typename?: 'PageList';
      documents: Array<{
        __typename?: 'PageOut';
        url: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export const PageUrnDocument = /*#__PURE__*/ gql`
  query PageUrn {
    PageQuery {
      list {
        documents {
          url
        }
      }
    }
  }
`;
export function usePageUrnQuery(
  baseOptions?: Apollo.QueryHookOptions<PageUrnQuery, PageUrnQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageUrnQuery, PageUrnQueryVariables>(
    PageUrnDocument,
    options
  );
}
export function usePageUrnLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageUrnQuery, PageUrnQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageUrnQuery, PageUrnQueryVariables>(
    PageUrnDocument,
    options
  );
}
export type PageUrnQueryHookResult = ReturnType<typeof usePageUrnQuery>;
export type PageUrnLazyQueryHookResult = ReturnType<typeof usePageUrnLazyQuery>;
export type PageUrnQueryResult = Apollo.QueryResult<
  PageUrnQuery,
  PageUrnQueryVariables
>;
