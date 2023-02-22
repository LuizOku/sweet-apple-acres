import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Roboto } from "@next/font/google";

import { wrapper } from "@/store";
import GlobalStyle from "@/styles/global.css";
import theme from "@/styles/theme";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
