import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import "macro-css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
