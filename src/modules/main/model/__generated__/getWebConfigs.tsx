import * as Types from '../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetScriptConfigsQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.InputFilter>>
    | Types.InputMaybe<Types.InputFilter>
  >;
}>;

export type GetScriptConfigsQuery = {
  __typename?: 'Query';
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

export const GetScriptConfigsDocument = /*#__PURE__*/ gql`
  query GetScriptConfigs($filters: [InputFilter]) {
    ScriptConfigQuery {
      list(filters: $filters) {
        documents {
          name
          bodyScript
          headScript
        }
      }
    }
  }
`;
export function useGetScriptConfigsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetScriptConfigsQuery,
    GetScriptConfigsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetScriptConfigsQuery, GetScriptConfigsQueryVariables>(
    GetScriptConfigsDocument,
    options
  );
}
export function useGetScriptConfigsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetScriptConfigsQuery,
    GetScriptConfigsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetScriptConfigsQuery,
    GetScriptConfigsQueryVariables
  >(GetScriptConfigsDocument, options);
}
export type GetScriptConfigsQueryHookResult = ReturnType<
  typeof useGetScriptConfigsQuery
>;
export type GetScriptConfigsLazyQueryHookResult = ReturnType<
  typeof useGetScriptConfigsLazyQuery
>;
export type GetScriptConfigsQueryResult = Apollo.QueryResult<
  GetScriptConfigsQuery,
  GetScriptConfigsQueryVariables
>;
