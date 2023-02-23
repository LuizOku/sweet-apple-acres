import React from "react";

import { Roboto } from "@next/font/google";

import Header from "../Header";
import Footer from "../Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className={roboto.className}>
      <Header />
      <main style={{ minHeight: "70vh", flex: 1 }}>{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
