import PropTypes from "prop-types";

export const InputClasses = (currentQuestion) => {
  const { verified, verification, response, errorMessage } = currentQuestion;

  // zipcode
  const zipcodeSuccess =
    verification === "zipcode" && response?.postal_code ? "successClass" : null;
  const zipcodeError =
    verification === "zipcode" && errorMessage ? "errorClass" : null;

  // phone number
  const phoneSuccess =
    verification === "phone_number" && verified ? "successClass" : null;
  const phoneError =
    verification === "phone_number" && errorMessage ? "errorClass" : null;

  // idle
  const idle = !zipcodeError && !zipcodeSuccess && "idleClass";

  return { idle, zipcodeSuccess, zipcodeError, phoneError, phoneSuccess };
};

InputClasses.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
};
