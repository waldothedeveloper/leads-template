import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid";

import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { classNames } from "../../utils/classNames";
import { useZipCode } from "../../hooks/useZipCode";

export const ZipCodeInput = () => {
  const { handleChange, handleSubmit, error, success, current } = useZipCode();

  //
  return (
    <div className="mt-12 w-full z-20">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="zipcode"
          className={classNames(
            success
              ? "text-cyan-600"
              : error
              ? "text-rose-500"
              : "text-blueGray-800",
            "ml-1 text-sm font-medium"
          )}
        >
          {success
            ? "That's about right!"
            : error
            ? "Hmm...let's check that again"
            : "Enter your zip code to start"}
        </label>

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
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {/* invalid zipcode */}
              {error && (
                <ExclamationIcon
                  className="h-8 w-8 text-red-500"
                  aria-hidden="true"
                />
              )}
              {/* success */}
              {success && (
                <BadgeCheckIcon
                  className="h-8 w-8 text-cyan-700"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>

          <div className="sm:ml-3">
            <button
              disabled={!success}
              type="submit"
              className={
                !success
                  ? "pointer-events-none opacity-40 w-full bg-cyan-500 rounded-md py-3 px-5 flex items-center justify-between text-base font-medium text-white"
                  : "w-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md py-3 px-5 flex items-center justify-between text-base font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              }
            >
              Search <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
      {/* success messages */}
      {success && (
        <p className="mt-2 text-md text-cyan-700 text-left pl-1 font-medium">
          {current.context.address.city}, {current.context.address.state}
        </p>
      )}
    </div>
  );
};
