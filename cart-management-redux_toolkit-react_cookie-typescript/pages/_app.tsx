import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './../utils/store/store';
import Nav from '../components/Home/Nav';
import React from 'react';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <div className=''>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </CookiesProvider>
  );
}

export default MyApp;
