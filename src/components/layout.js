import { Footer } from "./navigation/footer";
import { Header } from "./navigation/header";
import PropTypes from "prop-types";
import React from "react";

const ClientSideOnlyLazyLordicon = React.lazy(() => import("./lordicon"));

//
const Layout = ({ children }) => {
  const isSSR = typeof window === "undefined";

  //
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>loading...</div>}>
          <ClientSideOnlyLazyLordicon />
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </React.Suspense>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
