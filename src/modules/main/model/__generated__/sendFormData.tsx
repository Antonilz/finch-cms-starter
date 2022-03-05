import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../../__generated__/types';

const defaultOptions = {} as const;
export type SendFormDataMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.Scalars['Json']>;
}>;

export type SendFormDataMutation = {
  __typename?: 'Mutation';
  create:
    | {
        __typename?: 'SaveResult';
        document:
          | { __typename?: 'Document'; id: string | null | undefined }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const SendFormDataDocument = /* #__PURE__ */ gql`
  mutation SendFormData($data: Json) {
    create(data: $data, type: "FormResult") {
      document {
        id
      }
    }
  }
`;
export type SendFormDataMutationFn = Apollo.MutationFunction<
  SendFormDataMutation,
  SendFormDataMutationVariables
>;
export function useSendFormDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendFormDataMutation,
    SendFormDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SendFormDataMutation,
    SendFormDataMutationVariables
  >(SendFormDataDocument, options);
}
export type SendFormDataMutationHookResult = ReturnType<
  typeof useSendFormDataMutation
>;
export type SendFormDataMutationResult =
  Apollo.MutationResult<SendFormDataMutation>;
export type SendFormDataMutationOptions = Apollo.BaseMutationOptions<
  SendFormDataMutation,
  SendFormDataMutationVariables
>;
