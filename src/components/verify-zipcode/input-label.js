import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../utils/classNames";

export const InputLabel = ({ success, error }) => {
  return (
    <label
      htmlFor="zipcode"
      className={classNames(
        success
          ? "text-cyan-600"
          : error
          ? "text-rose-500"
          : "text-blueGray-800",
        "ml-1 text-sm font-medium"
      )}
    >
      {success
        ? "That's about right!"
        : error
        ? "Hmm...let's check that again"
        : "Enter your zip code to start"}
    </label>
  );
};

InputLabel.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.string,
};
