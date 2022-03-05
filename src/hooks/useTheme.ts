import { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { initApollo } from '~utils/apolloClient';

const query = gql`
  query Theme {
    theme {
      data
    }
  }
`;

export const useTheme = () => {
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
