import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../../__generated__/types';

const defaultOptions = {} as const;
export type GetWebConfigsQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.InputFilter>>
    | Types.InputMaybe<Types.InputFilter>
  >;
}>;

export type GetWebConfigsQuery = {
  __typename?: 'Query';
  WebConfigQuery:
    | {
        __typename?: 'WebConfigQuery';
        list:
          | {
              __typename?: 'WebConfigList';
              documents:
                | Array<
                    | {
                        __typename?: 'WebConfigOut';
                        title: string | null | undefined;
                        bodyscript: string | null | undefined;
                        headscript: string | null | undefined;
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

export const GetWebConfigsDocument = /* #__PURE__ */ gql`
  query GetWebConfigs($filters: [InputFilter]) {
    WebConfigQuery {
      list(filters: $filters) {
        documents {
          title
          bodyscript
          headscript
        }
      }
    }
  }
`;
export function useGetWebConfigsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetWebConfigsQuery,
    GetWebConfigsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetWebConfigsQuery, GetWebConfigsQueryVariables>(
    GetWebConfigsDocument,
    options
  );
}
export function useGetWebConfigsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWebConfigsQuery,
    GetWebConfigsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetWebConfigsQuery, GetWebConfigsQueryVariables>(
    GetWebConfigsDocument,
    options
  );
}
export type GetWebConfigsQueryHookResult = ReturnType<
  typeof useGetWebConfigsQuery
>;
export type GetWebConfigsLazyQueryHookResult = ReturnType<
  typeof useGetWebConfigsLazyQuery
>;
export type GetWebConfigsQueryResult = Apollo.QueryResult<
  GetWebConfigsQuery,
  GetWebConfigsQueryVariables
>;
