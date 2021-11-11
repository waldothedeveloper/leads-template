import { ExternalLinkIcon } from "@heroicons/react/solid";
import Layout from "./layout";
import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//
export const PhoneVerificationPlaceholder = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-wrap items-center justify-center">
        <div className="relative bg-blueGray-700 max-w-5xl mx-auto rounded-2xl">
          <div className="h-56 bg-transparent sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <StaticImage
              className="object-cover w-full h-full"
              imgStyle={{
                borderTopLeftRadius: `1rem`,
                borderBottomLeftRadius: `1rem`,
              }}
              src="../images/minified-acfix-partner-15.jpg"
              alt="acfix partner"
              placeholder="blurred"
              layout="fullWidth"
              transformOptions={{ fit: "cover" }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-base font-semibold uppercase tracking-wider text-blueGray-300">
                OH SNAP!
              </h2>
              <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                We&apos;re here to help
              </p>
              <p className="mt-3 text-lg text-blueGray-300">
                It appears that you landed on this page by mistake. Please
                perform the steps below in order to obtain the best HVAC quotes.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/quiz-conversion"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blueGray-800 bg-white hover:bg-blueGray-50"
                  >
                    Please complete this form first
                    <ExternalLinkIcon
                      className="-mr-1 ml-3 h-5 w-5 text-blueGray-400"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
