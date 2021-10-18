import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";

import PropTypes from "prop-types";
import React from "react";

export const InputStates = ({ current, error, success }) => {
  return (
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      {/* validating */}
      {current.matches("idle.validating") && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-cyan-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {/* invalid zipcode */}
      {error && (
        <ExclamationIcon className="h-8 w-8 text-red-500" aria-hidden="true" />
      )}
      {/* success */}
      {success && (
        <BadgeCheckIcon className="h-8 w-8 text-cyan-700" aria-hidden="true" />
      )}
    </div>
  );
};

InputStates.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.string,
  current: PropTypes.object,
};
