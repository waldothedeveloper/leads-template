import React, { useCallback } from "react";

import { CheckCircleIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import { RadioGroup } from "@headlessui/react";

export const RadioType = ({ currentQuestion, send }) => {
  //
  const handleOnChange = useCallback(
    (value) => send("CHANGE", { value }),
    [send]
  );

  const handleActiveChecked = useCallback(
    ({ active, checked }) =>
      `${
        active
          ? "ring-2 ring-offset-2 ring-offset-cyan-800 ring-white ring-opacity-60"
          : ""
      }
          ${checked ? "bg-cyan-600 text-white" : "bg-white"}
                    relative rounded-lg shadow-md px-2 py-4 cursor-pointer flex focus:outline-none`,
    []
  );

  const renderCheckedOption = useCallback((elem) => {
    return ({ checked }) => (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center">
          <div className="text-sm text-left">
            <RadioGroup.Label
              as="p"
              className={`font-medium  ${
                checked ? "text-white" : "text-gray-900"
              }`}
            >
              {elem}
            </RadioGroup.Label>
          </div>
        </div>
        {checked && (
          <div className="flex-shrink-0 text-white">
            <CheckCircleIcon className="w-6 h-6" />
          </div>
        )}
      </div>
    );
  }, []);

  renderCheckedOption.displayName = "renderCheckedOption";

  //
  return (
    <div className="w-full px-4 py-6">
      <div className="w-full max-w-xl mx-auto">
        <RadioGroup
          value={currentQuestion.response || ""}
          onChange={handleOnChange}
        >
          <RadioGroup.Label className="sr-only">
            {currentQuestion.question}
          </RadioGroup.Label>
          <div className="scrollbar space-y-2 h-56 overflow-y-auto overflow-x-hidden pt-3 pb-8 px-3">
            {currentQuestion.choices.map((elem, idx) => (
              <RadioGroup.Option
                key={idx}
                value={elem}
                className={handleActiveChecked}
              >
                {renderCheckedOption(elem)}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

RadioType.propTypes = {
  currentQuestion: PropTypes.object,
  send: PropTypes.func.isRequired,
  active: PropTypes.oneOf([PropTypes.bool, undefined]),
  checked: PropTypes.oneOf([PropTypes.bool, undefined]),
};
