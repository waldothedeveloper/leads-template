import { InputStates } from "./input-states";
import { InputType } from "./input-type";
import PropTypes from "prop-types";
import { RadioType } from "./radio-type";
import React from "react";
import { TextArea } from "./textarea-type";
import { WizardCard } from "./wizard-card";

export const FormTemplate = ({ send, currentQuestion, stateMachine }) => {
  //
  return (
    <div className="max-w-xl mx-auto">
      <WizardCard
        send={send}
        currentQuestion={currentQuestion}
        stateMachine={stateMachine}
      >
        {currentQuestion.type === "radio" ? (
          <RadioType currentQuestion={currentQuestion} send={send} />
        ) : currentQuestion.type === "textarea" ? (
          <TextArea send={send} currentQuestion={currentQuestion} />
        ) : (
          <InputType currentQuestion={currentQuestion} send={send}>
            <InputStates
              currentQuestion={currentQuestion}
              stateMachine={stateMachine}
            />
          </InputType>
        )}
      </WizardCard>
    </div>
  );
};

FormTemplate.propTypes = {
  send: PropTypes.func.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  stateMachine: PropTypes.object.isRequired,
};
