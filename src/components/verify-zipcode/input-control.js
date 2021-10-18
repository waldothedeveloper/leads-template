import { ChevronRightIcon } from "@heroicons/react/outline";
import { InputStates } from "./input-states";
import PropTypes from "prop-types";
import React from "react";

export const InputControl = ({ current, handleChange, error, success }) => {
  return (
    <div className="mt-1 flex items-center">
      <div className="relative">
        <input
          maxLength={5}
          value={current?.context?.zipcode || ""}
          onChange={handleChange}
          type="text"
          name="zipcode"
          id="zipcode"
          className={
            error
              ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 text-xl rounded-md"
              : success
              ? "block w-full pr-10 border-2 border-cyan-400 text-cyan-900 placeholder-cyan-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-xl rounded-md"
              : "block w-full pr-10 border-blueGray-300 text-blueGray-900 placeholder-blueGray-300 focus:outline-none focus:ring-blueGray-500 focus:border-blueGray-500 text-xl rounded-md"
          }
          placeholder="e.g. 33014"
        />
        <InputStates current={current} error={error} success={success} />
      </div>

      <div className="sm:ml-3">
        <button
          disabled={!success}
          type="submit"
          className={
            !success
              ? "pointer-events-none opacity-40 w-full bg-cyan-300 rounded-md py-3 px-5 flex items-center justify-between text-base font-medium text-white"
              : "w-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md py-3 px-5 flex items-center justify-between text-base font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          }
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
