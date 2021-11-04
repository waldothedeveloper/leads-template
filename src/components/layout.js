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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="preload"
          as="style"
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
