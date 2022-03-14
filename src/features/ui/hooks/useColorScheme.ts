import { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { initApollo } from '~features/services';

const query = gql`
  query Theme {
    theme {
      data
    }
  }
`;

export const useColorScheme = () => {
  const apolloClient = initApollo();

  const setTheme = useCallback(
    (data) => {
      apolloClient.writeQuery({
        query,
        data: {
          theme: {
            data,
          },
        },
      });
    },
    [apolloClient]
  );

  const { data } = useQuery(query);
  const theme = data?.theme.data;

  return [theme, setTheme];
};
