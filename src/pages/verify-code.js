import React, { useCallback } from "react";

import { Counter } from "../components/phone-verification/counter";
import { ExclamationIcon } from "@heroicons/react/solid";
import Layout from "../components/layout";
import { PhoneVerificationPlaceholder } from "../components/phone-verification-placeholder";
import PropTypes from "prop-types";
import { formatPhoneNumber } from "../utils/quiz_form_validation";
import { useMachine } from "@xstate/react";
// import { useValidatePhoneNumber } from "../hooks/useValidatePhoneNumber";
import { verifyCodeMachine } from "../components/machines/verify-code-machine";

const VerifyPhoneWithCode = ({ location }) => {
  // ! THIS ONE WILL STAY
  const phone = location?.state?.phone;
  const [state, send] = useMachine(() => verifyCodeMachine(phone));
  const { code, errorMessage, attempts } = state.context;
  console.log("attempts: ", attempts);

  const disabled = ["idle", "smsCodeNotSent", "validating"].some(state.matches);
  const disableSubmit = code.length < 6;

  //! THIS WILL BE DELETED
  // const { code, error, handleChange, handleSubmit, requestNewCode } =
  //   useValidatePhoneNumber(phone);

  //! THIS BELOW WILL BE TAKEN TO ITS OWN FUNCTION

  const handleOnChange = useCallback(
    (event) => {
      send("CHANGE", event.target);
    },
    [send]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    return send("SUBMIT_CODE");
  };

  return !phone ? (
    <PhoneVerificationPlaceholder />
  ) : (
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
                  <h3 className="text-sm font-medium text-blueGray-700">
                    {disabled
                      ? ``
                      : `An SMS code with 6 digits was sent to this number:
                    ${formatPhoneNumber(phone)}.` +
                        `\n This code will be valid for 10 minutes.`}
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="sm:max-w-xl sm:mx-auto lg:mx-0 mt-2"
                  >
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1 relative">
                        <label htmlFor="phone-verification" className="sr-only">
                          Phone Number verification
                        </label>
                        <input
                          disabled={disabled}
                          onChange={handleOnChange}
                          value={code || ""}
                          name="phone-verification"
                          maxLength={6}
                          id="text"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          autoComplete="one-time-code"
                          className={
                            disabled
                              ? "pl-4 border-gray-300 block w-full px-4 py-3 rounded-md text-base bg-gray-200"
                              : errorMessage && errorMessage.length > 0
                              ? "focus:ring-red-500 focus:border-red-500 pl-4 border-red-300 block w-full px-4 py-3 rounded-md text-base text-red-700 focus:outline-none focus:ring-2"
                              : "focus:ring-cyan-500 focus:border-cyan-500 pl-4 border-gray-300 block w-full px-4 py-3 rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                          }
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          {errorMessage && errorMessage.length > 0 && (
                            <ExclamationIcon
                              className="h-8 w-8 text-red-500"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          disabled={disableSubmit}
                          type="submit"
                          className={
                            disableSubmit
                              ? "transition-colors ease-out duration-300 delay-75 pointer-events-none block w-full py-3 px-4 rounded-md text-white bg-gray-400 font-medium"
                              : "transition-colors ease-out duration-300 delay-75 block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-cyan-400 to-teal-700 text-white font-medium hover:from-cyan-500 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          }
                        >
                          Verify code
                        </button>
                      </div>
                    </div>
                  </form>
                  <p
                    className="mt-1 text-sm text-red-600 font-medium"
                    id="email-error"
                  >
                    {errorMessage && errorMessage.length > 0
                      ? errorMessage
                      : ""}
                  </p>
                  {state.matches("smsCodeSent") && (
                    <Counter send={send} attempts={attempts} />
                  )}
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
