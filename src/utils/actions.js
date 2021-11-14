import React from "react";
import cellphoneIcon from "../images/icons/cellphone.svg";
import onlineFormIcon from "../images/icons/online-form.svg";
import supportIcon from "../images/icons/support.svg";
import workerIcon from "../images/icons/worker.svg";

//
export const actions = [
  {
    title: "Fill out the online form",
    description:
      "To learn more about your project, we'll ask you a few questions and get some basic information about you",
    icon: (
      <img className="w-14 h-14" src={onlineFormIcon} alt="online form icon" />
    ),

    iconBackground: "bg-rose-50",
  },
  {
    title: "Your phone number is verified",
    description:
      "In order to verify your identity, we will send you a text message with a 6 digit code.",
    icon: (
      <img className="w-14 h-14" src={cellphoneIcon} alt="online form icon" />
    ),

    iconBackground: "bg-cyan-50",
  },
  {
    title: "Our team will call you right away",
    description:
      "A representative from our automated system will call you to gather additional details about your project",
    icon: (
      <img className="w-14 h-14" src={supportIcon} alt="online form icon" />
    ),

    iconBackground: "bg-purple-50",
  },
  {
    title: "We'll match you with the right Pro",
    description:
      "Following the collection of all the essential details, we can match you with a suitable Pro.",
    icon: <img className="w-14 h-14" src={workerIcon} alt="online form icon" />,

    iconBackground: "bg-yellow-50",
  },
];
