import { ButtonGroups } from "./button-groups";
import PropTypes from "prop-types";
import React from "react";
export const WizardCard = ({ children, send, currentQuestion }) => {
  const disabled =
    currentQuestion.response && currentQuestion.optional !== true;

  return (
    <div className="aspect-w-16 aspect-h-14 text-center">
      <div className="w-full flex flex-col rounded-xl overflow-hidden px-4 md:p-8 backdrop-filter backdrop-blur-lg bg-white bg-opacity-75">
        <div className="h-16 flex-shrink-0">
          <p className="text-2xl font-bold text-blueGray-900">
            {currentQuestion.question}
          </p>
        </div>
        <div className="flex-auto flex flex-col">
          <div className="block h-56 overflow-hidden">{children}</div>
          <ButtonGroups
            currentQuestion={currentQuestion}
            disabled={disabled}
            send={send}
          />
        </div>
      </div>
    </div>
  );
};

WizardCard.propTypes = {
  children: PropTypes.node.isRequired,
  send: PropTypes.func.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};
