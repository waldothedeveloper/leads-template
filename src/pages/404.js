import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import telIcon from "../images/icons/telephone-blueGray500.svg";
import { useCompanyPhone } from "../hooks/useCompanyPhone";

const NotFoundPage = () => {
  const { phoneNumber } = useCompanyPhone();

  //
  return (
    <Layout>
      <div className="bg-blueGray-100 min-h-screen flex flex-col lg:relative">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-blueGray-100">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
                  404 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-6">
                  <Link
                    to="/"
                    className="text-base font-medium text-cyan-600 hover:text-cyan-500"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 bg-blueGray-50">
            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
              <nav className="flex space-x-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex text-blueGray-500 hover:text-blueGray-700 items-center"
                >
                  Contact Support{` `}
                  <img
                    className="w-10 h-10"
                    src={telIcon}
                    alt="telephone icon"
                  />
                </a>
              </nav>
            </div>
          </footer>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage
            className="absolute inset-0 h-full w-full object-cover"
            src="../images/minified-acfix-partner-15.jpg"
            alt="acfix partner"
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: "cover" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
