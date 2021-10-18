import React from "react";
import { actions } from "../../utils/actions";
import { classNames } from "../../utils/classNames";

export const HowWeProtectDetails = () => {
  return (
    <div className="overflow-hidden sm:grid sm:grid-cols-2 sm:gap-px items-start justify-center">
      {actions.map((action) => (
        <div key={action.title} className="group p-6">
          <span
            className={classNames(
              action.iconBackground,
              "rounded-lg inline-flex p-3"
            )}
          >
            {action.icon}
          </span>

          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <div className="focus:outline-none">{action.title}</div>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
