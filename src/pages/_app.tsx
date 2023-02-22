import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { Roboto } from "@next/font/google";

import { wrapper } from "@/store";
import theme from "@/styles/theme";
import { Provider } from "react-redux";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={roboto.className}>
          <Component {...props.pageProps} />
        </main>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
