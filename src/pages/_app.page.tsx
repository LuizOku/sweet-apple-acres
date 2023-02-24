import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { wrapper } from "@/store";
import { Layout } from "@/components";
import "@/styles/globals.css";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
  );
}

export default App;
