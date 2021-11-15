import React from "react";
import { cardDetails } from "../../utils/card-details";

export const CardDetails = () => {
  return (
    <div className="grid grid-cols-1 w-full relative">
      {cardDetails.map((card) => (
        <div
          key={card.id}
          className="relative py-2 flex items-center justify-center space-x-3"
        >
          <div className="flex-shrink-0 relative">
            <span className="flex h-3 w-3">
              <span className={card.ping_full}></span>
              <span className={card.ping_fixed}></span>
            </span>
          </div>
          <div className="flex-1 min-w-0 w-full flex items-center justify-between">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="font-medium text-lg text-blueGray-800">{card.unit}</p>
            <p className="ml-2 text-base text-blueGray-800 font-semibold">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
