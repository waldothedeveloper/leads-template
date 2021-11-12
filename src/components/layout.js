import { Footer } from "./navigation/footer";
import { Header } from "./navigation/header";
import PropTypes from "prop-types";
import React from "react";
import { defineLordIconElement } from "lord-icon-element";
import lottie from "lottie-web";

defineLordIconElement(lottie.loadAnimation);

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
