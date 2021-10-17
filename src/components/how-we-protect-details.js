import React from "react";
import { classNames } from "../utils/classNames";

const actions = [
  {
    title: "Fill out the online form",
    description:
      "To learn more about your project, we'll ask you a few questions and get some basic information about you",
    icon: (
      <lord-icon
        delay="2500"
        src="https://cdn.lordicon.com/ufezupnm.json"
        trigger="loop"
        colors="primary:#F43F5E,secondary:#F43F5E"
        style={{ width: 55, height: 55 }}
      />
    ),

    iconBackground: "bg-rose-50",
  },
  {
    title: "Your phone number is verified",
    description:
      "In order to verify your identity, we will send you a text message with a 6 digit code.",
    icon: (
      <lord-icon
        delay="2500"
        src="https://cdn.lordicon.com/bkhzcebe.json"
        trigger="loop"
        colors="primary:#22D3EE,secondary:#22D3EE"
        style={{ width: 55, height: 55 }}
      />
    ),

    iconBackground: "bg-cyan-50",
  },
  {
    title: "Our team will call you right away",
    description:
      "A representative from our automated system will call you to gather additional details about your project",
    icon: (
      <lord-icon
        delay="2500"
        src="https://cdn.lordicon.com/zxwguguk.json"
        trigger="loop"
        colors="primary:#C084FC,secondary:#C084FC"
        style={{ width: 55, height: 55 }}
      />
    ),

    iconBackground: "bg-purple-50",
  },
  {
    title: "We'll match you with the right Pro",
    description:
      "Following the collection of all the essential details, we can match you with a suitable Pro.",
    icon: (
      <lord-icon
        delay="2500"
        src="https://cdn.lordicon.com/jpromtvn.json"
        trigger="loop"
        colors="primary:#FACC15,secondary:#FACC15"
        style={{ width: 55, height: 55 }}
      />
    ),

    iconBackground: "bg-yellow-50",
  },
];

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
              <div className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </div>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
