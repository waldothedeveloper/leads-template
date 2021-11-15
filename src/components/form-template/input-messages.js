import PropTypes from "prop-types";
import React from "react";

export const InputMessages = ({ currentQuestion }) => {
  const { verification, errorMessage, response, verified } = currentQuestion;

  // zipcode
  const validZipcode = verification === "zipcode" && response?.postal_code;
  const invalidZipcode = verification === "zipcode" && errorMessage;

  // phone number
  const invalidPhoneNumber = verification === "phone_number" && errorMessage;
  const validPhoneNumber = verification === "phone_number" && verified;

  //
  return (
    <div>
      {validZipcode && (
        <p className="mt-2 text-md text-cyan-700 text-left pl-1 font-medium">
          {response.city}, {response.state}
        </p>
      )}
      {validPhoneNumber && (
        <p className="mt-2 text-md text-cyan-700 text-left pl-1 font-medium">
          Excellent, let&apos;s finish!
        </p>
      )}
      {invalidPhoneNumber && (
        <p className="mt-2 text-md text-red-500 text-left pl-1 font-medium">
          {errorMessage}
        </p>
      )}
      {invalidZipcode && (
        <p className="mt-2 text-md text-red-500 text-left pl-1 font-medium">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

InputMessages.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
};
