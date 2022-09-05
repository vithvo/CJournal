import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Head from "next/head";

import type { AppProps } from "next/app";
import "../styles/globals.scss";
import "macro-css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>react-journal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="static/logo.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
