import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";

import { wrapper } from "@/store";
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
      <main className={roboto.className}>
        <Component {...props.pageProps} />
      </main>
    </Provider>
  );
}

export default App;
