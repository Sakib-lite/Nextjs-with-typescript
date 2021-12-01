import '../styles/index.css';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { Provider, session } from 'next-auth/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <SnackbarProvider dense={true}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        iconVariant={{
          error: '✖️',
          warning: '⚠️',
          info: 'ℹ️',
        }}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
}

export default MyApp;
