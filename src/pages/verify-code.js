import React, { useCallback, useEffect, useState } from "react";

import Layout from "../components/layout";
import PropTypes from "prop-types";
import { finishPhoneVerification } from "../utils/finish-phone-verification";
import { formatPhoneNumber } from "../utils/quiz_form_validation";
import { verifyPhoneWithCode } from "../utils/verify-phone-with-code";

const VerifyPhoneWithCode = ({ location }) => {
  const phone = location.state.phone;
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const result = verifyPhoneWithCode(phone, setError);

    return result.then((data) => data);
  }, [phone]);

  const handleChange = useCallback((event) => setCode(event.target.value), []);

  const handleSubmit = useCallback(
    (event) => {
      if (event) event.preventDefault();
      if (code && code.length === 6) {
        return finishPhoneVerification(phone, code, setError);
      }
      return false;
    },
    [phone, code]
  );

  //
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blueGray-100 to-cyan-100 min-h-screen">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                We&apos;re almost there!
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Our last step is to verify your phone number. This ensures that
                we can contact you to provide our services.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto rounded-lg overflow-hidden flex">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-sm font-semibold text-gray-700">
                    An SMS code with 6 digits was sent to this number:{" "}
                    {formatPhoneNumber(phone)}
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    action="#"
                    className="sm:max-w-xl sm:mx-auto lg:mx-0 mt-2"
                  >
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="phone-verification" className="sr-only">
                          Phone Number verification
                        </label>
                        <input
                          onChange={handleChange}
                          value={code || ""}
                          name="phone-verification"
                          maxLength={6}
                          id="text"
                          type="text"
                          placeholder="123456"
                          className="focus:ring-cyan-500 focus:border-cyan-500 pl-4 border-gray-300 block w-full px-4 py-3 rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2focus:ring-offset-gray-900"
                        />
                        <p
                          className="mt-1 text-sm text-red-600 font-medium"
                          id="email-error"
                        >
                          {error ? error : ""}
                        </p>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          disabled={!code}
                          type="submit"
                          className={
                            !code
                              ? "block w-full py-3 px-4 rounded-md text-white bg-gray-400 font-medium"
                              : "block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-cyan-400 to-teal-700 text-white font-medium hover:from-cyan-500 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          }
                        >
                          Verify code
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

VerifyPhoneWithCode.propTypes = {
  location: PropTypes.object,
};
export default VerifyPhoneWithCode;
