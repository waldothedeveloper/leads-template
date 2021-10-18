import { ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";
import React from "react";
import { useCallToAction } from "../hooks/useCallToAction";

export const CallToAction = () => {
  const { header, subheader } = useCallToAction();

  //
  return (
    <div className="bg-blueGray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="block">{header}</span>
            <span className="mt-2 lock text-cyan-500">{subheader}</span>
          </h2>
        </div>

        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="px-6 py-5 absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-xl filter blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <Link
                to="/quiz-conversion"
                className="relative px-6 py-5 bg-blueGray-800 rounded-xl leading-none flex items-center text-white group-hover:text-cyan-500 transition duration-200"
              >
                It&apos; absolutely free
                <ArrowRightIcon
                  className="ml-3 -mr-1 h-5 w-5 inline-flex items-center justify-center"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <p className="ml-1 mt-3 text-xs text-gray-400 font-semibold tracking-wide">
              No risk. No obligation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
