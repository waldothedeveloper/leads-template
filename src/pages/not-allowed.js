import Layout from "../components/layout";
import PropTypes from "prop-types";
import React from "react";
import { formatPhoneNumber } from "../utils/quiz_form_validation";
import { useCompanyPhone } from "../hooks/useCompanyPhone";

const NotAllowed = ({ location }) => {
  const { phoneNumber } = useCompanyPhone();
  const { message, code } = location.state ?? "";

  return (
    <Layout>
      <div className="bg-blueGray-100 h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-rose-500 sm:text-5xl">
              {code}
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-blueGray-700 tracking-tight sm:text-5xl">
                  Please give us a call at{" "}
                  {formatPhoneNumber(JSON.stringify(phoneNumber))}
                </h1>
                <p className="mt-6 text-xl text-rose-500 font-medium">
                  {message}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

NotAllowed.propTypes = {
  location: PropTypes.object.isRequired,
};
export default NotAllowed;
