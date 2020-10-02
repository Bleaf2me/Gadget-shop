import * as React from 'react';
import Head from 'next/head';
import { AllGadgetsBLContextProvider } from '@md-modules/gadget-shop/all-gadgets/layers/business';
import { AllGadgetsAPIContextProvider } from '@md-modules/gadget-shop/all-gadgets/layers/api/all-gadgets';

// import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Electro gadget shop</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <AllGadgetsAPIContextProvider>
      <AllGadgetsBLContextProvider>
        <Component {...pageProps} />
      </AllGadgetsBLContextProvider>
    </AllGadgetsAPIContextProvider>
    <GlobalStyles />
  </>
);

export default MyApp;
