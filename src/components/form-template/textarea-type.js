import React, { useCallback } from "react";

import PropTypes from "prop-types";

export const TextArea = ({ send, currentQuestion }) => {
  const handleOnChange = useCallback(
    (event) => send("CHANGE", event.target),
    [send]
  );

  return (
    <div className="mt-1 sm:mt-0 sm:col-span-2">
      <label
        htmlFor="about_project"
        className="block text-sm font-medium text-gray-500 text-left mb-1"
      >
        Optional
      </label>
      <textarea
        maxLength={250}
        id="about_project"
        name="about_project"
        rows={3}
        className="block w-full focus:ring-white focus:border-gray-50 sm:text-sm border border-gray-700 rounded-md bg-transparent"
        value={currentQuestion.response || ""}
        onChange={handleOnChange}
      />
      <p className="mt-2 text-sm text-gray-500">
        Let us know what are you looking for. (
        {currentQuestion.response?.length || 0} of 250 max.)
      </p>
    </div>
  );
};

TextArea.propTypes = {
  send: PropTypes.func.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};
