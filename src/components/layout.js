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
          type="text/javascript"
          src="//cdn.callrail.com/companies/560693753/394c65566136d819f13c/12/swap.js"
        ></script>
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
