import { Footer } from "./navigation/footer";
import { Header } from "./navigation/header";
import PropTypes from "prop-types";
import React from "react";

//
const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
