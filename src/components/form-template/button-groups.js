import PropTypes from "prop-types";
import React from "react";
import { useButtonGroups } from "../../hooks/useButtonGroups";

export const ButtonGroups = ({ currentQuestion, send, stateMachine }) => {
  const { sendPrevious, sendNext, sendSubmit, disabled, currNum, totalQuiz } =
    useButtonGroups({ stateMachine, send, currentQuestion });

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <button
        disabled={currentQuestion.id === 1}
        onClick={sendPrevious}
        type="button"
        className={
          currentQuestion.id === 1
            ? "pointer-events-none mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-400 bg-gray-300"
            : "mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blueGray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        }
      >
        PREV
      </button>

      <button
        disabled={!disabled}
        onClick={currNum === totalQuiz ? sendSubmit : sendNext}
        type="button"
        className={
          !disabled
            ? "pointer-events-none mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-400 bg-gray-300"
            : "mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        }
      >
        {currNum === totalQuiz ? `FINISH` : `NEXT`}
      </button>
    </div>
  );
};

ButtonGroups.propTypes = {
  currentQuestion: PropTypes.object,
  disabled: PropTypes.bool,
  send: PropTypes.func.isRequired,
  stateMachine: PropTypes.object,
};
