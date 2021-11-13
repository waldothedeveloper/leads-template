import { Footer } from "./navigation/footer";
import { Header } from "./navigation/header";
import { Loader } from "./loader";
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
        <React.Suspense fallback={<Loader />}>
          <main>
            <ClientSideOnlyLazyLordicon />
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
