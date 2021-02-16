import React, { useEffect, ReactElement } from 'react';
import { AppContext, AppProps /*, AppContext */ } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@material-ui/core';

import theme from '@configs/theme/materialUi';

import { wrapper } from '@redux/store';
import { END } from 'redux-saga';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;


function MyApp({ Component, pageProps }: AppProps): ReactElement {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
        ctx.store.dispatch(END);
        await ctx.store.sagaTask?.toPromise();
    }

    return {
        pageProps,
    };
};


export default wrapper.withRedux(MyApp);
