import React from "react";
import { WorkDetails } from "./work-details";
import { useHowItWorks } from "../../hooks/useHowItWorks";

export const HowItWorks = () => {
  const { newData, subheader } = useHowItWorks();

  //
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            How it Works?
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">{subheader}</p>
        </div>
        <WorkDetails newData={newData} />
      </div>
    </div>
  );
};
