import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { wrapper } from "@/store";
import GlobalStyle from "@/styles/global.css";
import theme from "@/styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
