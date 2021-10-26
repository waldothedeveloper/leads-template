import React, { useCallback } from "react";

import { InputClasses } from "./input-classes";
import { InputMessages } from "./input-messages";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

export const InputType = ({ currentQuestion, send, children }) => {
  const { name, type, placeholder, response, maxLength } = currentQuestion;

  const { idle, zipcodeSuccess, zipcodeError, phoneError, phoneSuccess } =
    InputClasses(currentQuestion);

  const handleOnChange = useCallback(
    (event) => send("CHANGE", event.target),
    [send]
  );

  return (
    <div>
      <div
        className={classNames(
          zipcodeSuccess || phoneSuccess || zipcodeError || phoneError || idle,
          "relative text-left mt-6"
        )}
      >
        <input
          onChange={handleOnChange}
          value={response?.postal_code ? response.postal_code : response || ""}
          type={type}
          name={name}
          maxLength={Number.parseInt(maxLength, 10)}
          placeholder={placeholder}
          aria-invalid="true"
          className={classNames(
            zipcodeSuccess || phoneSuccess
              ? "text-cyan-600"
              : zipcodeError || phoneError
              ? "text-red-500"
              : idle && "text-gray-800",
            "bg-transparent block w-full border-0 p-0 focus:ring-0 text-xl font-medium"
          )}
        />
        {children}
      </div>
      <InputMessages currentQuestion={currentQuestion} />
    </div>
  );
};

InputType.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  send: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
