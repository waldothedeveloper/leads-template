import React, { useCallback } from "react";

import PropTypes from "prop-types";

export const ButtonGroups = ({ currentQuestion, disabled, send }) => {
  const sendPrevious = useCallback(() => send("PREV"), [send]);
  const sendNext = useCallback(() => send("NEXT"), [send]);

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      {currentQuestion.id > 1 && (
        <button
          onClick={sendPrevious}
          type="button"
          className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blueGray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        >
          PREV
        </button>
      )}
      <button
        disabled={!disabled && !currentQuestion.optional}
        onClick={sendNext}
        type="button"
        className={
          !disabled && !currentQuestion.optional
            ? "mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-400 bg-gray-300"
            : "mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        }
      >
        NEXT
      </button>
    </div>
  );
};

ButtonGroups.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  disabled: PropTypes.oneOf([null, true, "", false]),
  send: PropTypes.func.isRequired,
};
