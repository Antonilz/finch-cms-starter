import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ReduxWrapper } from '~model/store';
import { RedirectCheck } from '~components/RedirectCheck';
import { GlobalStyles } from '~components/GlobalStyles';
import { useApollo } from '~features/services';
import { useResizeObserver } from '~features/ui/hooks/useResizeObserver';
import 'normalize.css';

const App = ({ Component, pageProps }: AppProps) => {
  useResizeObserver();
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <RedirectCheck />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default ReduxWrapper.withRedux(App);
