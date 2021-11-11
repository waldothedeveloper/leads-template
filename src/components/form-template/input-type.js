import React, { useCallback } from "react";

import { InputClasses } from "./input-classes";
import { InputMessages } from "./input-messages";
import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";
import usaFlag from "../../images/usa_flag.svg";

export const InputType = ({ currentQuestion, send, children }) => {
  const {
    name,
    inputmode,
    pattern,
    autocomplete,
    type,
    placeholder,
    response,
    maxLength,
  } = currentQuestion;

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
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {name === "phone_number" && (
            <img src={usaFlag} className="h-8 w-8  pr-1" alt="usa_flag" />
          )}
        </div>
        <input
          onChange={handleOnChange}
          value={response?.postal_code ? response.postal_code : response || ""}
          type={type}
          name={name}
          inputMode={inputmode}
          pattern={pattern}
          autoComplete={autocomplete}
          maxLength={Number.parseInt(maxLength, 10)}
          placeholder={placeholder}
          aria-invalid="true"
          className={classNames(
            zipcodeSuccess || phoneSuccess
              ? "text-cyan-600"
              : zipcodeError || phoneError
              ? "text-red-500"
              : idle && "text-gray-800",
            name === "phone_number"
              ? "bg-transparent block w-full border-0 pl-8 focus:ring-0 text-xl font-medium ml-2"
              : "bg-transparent block w-full border-0 p-0 focus:ring-0 text-xl font-medium"
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
