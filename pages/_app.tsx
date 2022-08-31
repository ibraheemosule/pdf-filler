import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/Global.styled';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

interface CustomAppProps extends AppProps {}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
