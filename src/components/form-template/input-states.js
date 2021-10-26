import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";

import PropTypes from "prop-types";
import React from "react";
import { SpinSVG } from "../../utils/spin-svg";

export const InputStates = ({ currentQuestion, stateMachine }) => {
  const error = currentQuestion.errorMessage;
  const success =
    (currentQuestion.verification === "zipcode" &&
      currentQuestion.response?.postal_code) ||
    (currentQuestion.verification === "phone_number" &&
      currentQuestion.verified)
      ? true
      : false;

  //
  return (
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      {/* validating */}
      {stateMachine.matches("validating") && !error && <SpinSVG />}
      {/* invalid  */}
      {error && !stateMachine.matches("validating") && (
        <ExclamationIcon className="h-8 w-8 text-red-500" aria-hidden="true" />
      )}
      {/* success */}
      {success && (
        <BadgeCheckIcon className="h-8 w-8 text-cyan-700" aria-hidden="true" />
      )}
    </div>
  );
};

//
InputStates.propTypes = {
  stateMachine: PropTypes.object.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};
