import { CardDetails } from "./card-details";
import React from "react";
import { YellowBlow } from "./yellow-blob";

// interesting stats/facts
// ! Each day in Florida, 36 people need ac repair
// ! Florida ranks 3rd in ac repairs
//! There are AC repair events the most often in Jacksonville, FL, followed by Orlando-Daytona and Tampa.
export const Card = () => {
  return (
    <div className="xl:mt-12">
      {[1].map((_, idx) => (
        <div key={idx} className="flex flex-col overflow-hidden">
          <div className="flex-1 px-2.5 py-3 md:py-6 xl:p-6 flex flex-col justify-between mx-auto">
            <div className="flex-1 w-full">
              {/* yellow blob only for sm viewports */}
              <YellowBlow />
              {/* details */}
              <CardDetails />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
