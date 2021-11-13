import React from "react";

export const Loader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center justify-center">
      <h1 className="py-6 px-3 text-4xl lg:text-8xl bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent font-extrabold tracking-wide">
        ACFIX.TODAY
      </h1>
      <p className="text-gray-400 font-medium text-base md:text-4xl">
        is loading, please wait...
      </p>
    </div>
  </div>
);
