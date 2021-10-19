import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";

import PropTypes from "prop-types";
import React from "react";
import { SpinSVG } from "../../utils/spin-svg";

export const InputStates = ({ current, error, success }) => {
  return (
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      {/* validating */}
      {current.matches("idle.validating") && <SpinSVG />}
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
