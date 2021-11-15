import { ButtonGroups } from "./button-groups";
import PropTypes from "prop-types";
import React from "react";
export const WizardCard = ({
  children,
  send,
  currentQuestion,
  stateMachine,
}) => {
  const { question } = currentQuestion;

  return (
    <div className="h-full text-center">
      <div className="w-full flex flex-col rounded-xl overflow-hidden py-8 px-4 md:p-8 backdrop-filter backdrop-blur-lg bg-white bg-opacity-75">
        <div className="h-24 flex-shrink-0">
          <p className="text-2xl font-bold text-blueGray-900">{question}</p>
        </div>
        <div className="flex-auto flex flex-col">
          <div className="block h-56 overflow-hidden">{children}</div>
          <ButtonGroups
            stateMachine={stateMachine}
            currentQuestion={currentQuestion}
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
  stateMachine: PropTypes.object.isRequired,
};
