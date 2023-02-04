import Head from "next/head";
import React from "react";
import { Footer } from "../../components";

import { PageLayoutProps } from "../../types";

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>Bettermart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
