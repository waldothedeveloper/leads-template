import { ChevronRightIcon } from "@heroicons/react/outline";
import { InputStates } from "./input-states";
import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../utils/classNames";

export const InputControl = ({ current, handleChange, error, success }) => {
  return (
    <div className="mt-1 flex items-center">
      <div className="relative">
        <input
          maxLength={5}
          value={current?.context?.zipcode || ""}
          onChange={handleChange}
          type="number"
          name="zipcode"
          id="zipcode"
          className={error ? "error" : success ? "success" : "idle"}
          placeholder="e.g. 33014"
        />
        <InputStates current={current} error={error} success={success} />
      </div>

      <div className="sm:ml-3">
        <button
          disabled={!success}
          type="submit"
          className={classNames(
            !success && "pointer-events-none opacity-40",
            "w-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md py-3 px-5 flex items-center justify-between text-base font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          )}
        >
          Search <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

InputControl.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.string,
  current: PropTypes.object,
  handleChange: PropTypes.func,
};
