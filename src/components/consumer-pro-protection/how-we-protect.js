import { HeroTexts } from "./hero-texts";
import { HowWeProtectDetails } from "./how-we-protect-details";
import React from "react";
import { StaticImages } from "./static-images";
export const HowWeProtect = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-center">
        <div className="w-full mb-20 xl:mb-0">
          <div className="flex flex-col mx-3">
            {/* 1 1 1 1 1 */}
            <HeroTexts />
            {/* 2  2 2 2 2 */}
            <div className="max-w-xl md:mx-auto">
              <HowWeProtectDetails />
            </div>
          </div>
        </div>
        {/* image of worker and background images */}
        <StaticImages />
      </div>
    </div>
  );
};
