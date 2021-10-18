import { LargeScreenStepper } from "./large-screen-stepper";
import { MobileStepper } from "./mobile-stepper";
import React from "react";
import { WizardCard } from "./wizard-card";
export const FormTemplate = () => {
  return (
    <div className="bg-blueGray-100 min-h-screen overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 py-6 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center place-content-center">
          <MobileStepper />
          <LargeScreenStepper />
          <WizardCard />
        </div>
      </div>
    </div>
  );
};
