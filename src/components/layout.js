import { Footer } from "./navigation/footer";
import { Header } from "./navigation/header";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

//
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"
        />
      </Helmet>

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
