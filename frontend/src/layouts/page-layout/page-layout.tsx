import Head from "next/head";
import React from "react";

import { PageLayoutProps } from "../../types";

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>Bettermart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default PageLayout;
