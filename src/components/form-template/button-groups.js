import React, { useCallback } from "react";

import PropTypes from "prop-types";
import { saveToDB } from "../../utils/save-to-db";

export const ButtonGroups = ({
  currentQuestion,
  disabled,
  send,
  stateMachine,
}) => {
  const currNum = stateMachine.context.currentQuiz;
  const totalQuiz = Object.keys(stateMachine.context.data).length;

  //
  const sendPrevious = useCallback(() => send("PREV"), [send]);
  const sendNext = useCallback(() => send("NEXT"), [send]);
  const sendSubmit = useCallback(() => {
    let fields = {};

    for (let key in stateMachine.context.data) {
      fields = {
        ...fields,
        "Lead-Date": new Date(),
        [stateMachine.context.data[key].question]:
          stateMachine.context.data[key].verification === "zipcode"
            ? `city: ${stateMachine.context.data[key].response.city}\n state: ${stateMachine.context.data[key].response.state}\n zipcode: ${stateMachine.context.data[key].response.postal_code}\n`
            : stateMachine.context.data[key].response,
      };
    }

    return saveToDB(fields);
  }, [stateMachine]);

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
        disabled={!disabled && !currentQuestion.optional}
        onClick={currNum === totalQuiz ? sendSubmit : sendNext}
        type="button"
        className={
          !disabled && !currentQuestion.optional
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
  currentQuestion: PropTypes.object.isRequired,
  disabled: PropTypes.oneOf([null, true, "", false]),
  send: PropTypes.func.isRequired,
  stateMachine: PropTypes.object.isRequired,
};
