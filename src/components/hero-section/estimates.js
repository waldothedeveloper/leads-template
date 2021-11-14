import PropTypes from "prop-types";
import React from "react";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
import telIcon from "../../images/icons/telephone.svg";
export const HeroEstimates = ({ phoneNumber }) => {
  return (
    <div>
      <a
        href={`tel:${phoneNumber}`}
        className="inline-flex items-center text-gray-50 bg-blueGray-900 rounded-full p-1 sm:text-base lg:text-sm xl:text-base hover:text-gray-200 z-10"
      >
        <span className="px-3 py-1 text-gray-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
          FREE estimates{" "}
          <span role="img" aria-label="star eyes emoji">
            🤩{" "}
          </span>
        </span>
        <img className="w-10 h-10" src={telIcon} alt="telephone icon" />
        <span className="mr-4 text-base">{formatPhoneNumber(phoneNumber)}</span>
      </a>
    </div>
  );
};
HeroEstimates.propTypes = {
  phoneNumber: PropTypes.number,
};
