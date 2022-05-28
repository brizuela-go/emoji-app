import * as React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  metaDescription?: string;
}
const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  pageTitle,
  metaDescription,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="apple-touch-icon"
          href="https://images.emojiterra.com/twitter/v13.1/512px/1f4a1.png"
        />
        <link
          rel="icon"
          href="https://images.emojiterra.com/twitter/v13.1/512px/1f4a1.png"
        />
      </Head>
      <div className="max-w-6xl mx-auto my-8 p-5">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
