import Layout from "../components/layout";
import React from "react";
import telIcon from "../images/icons/telephone.svg";
import { useCompanyPhone } from "../hooks/useCompanyPhone";
//
const AppError = () => {
  const { phoneNumber } = useCompanyPhone();

  //
  return (
    <Layout>
      <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-rose-600 sm:text-5xl">
              500
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Error
                </h1>
                <p className="mt-1 text-xl text-gray-500">
                  We&apos;re sorry for the inconvenience. Please give us a call.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-rose-50 bg-rose-700 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Contact Support{` `}
                  <img
                    className="w-10 h-10"
                    src={telIcon}
                    alt="telephone icon"
                  />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default AppError;
