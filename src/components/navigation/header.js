import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import { Link } from "gatsby";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
import { logoIcon } from "../../utils/logoIcon";
import { useNavigation } from "../../hooks/useNavigation";

export const Header = () => {
  const { logo, phoneNumber, motto } = useNavigation();

  //
  return (
    <header>
      <Popover className="relative bg-blueGray-100">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:space-x-10 lg:px-8 md:bg-blueGray-800 rounded-b-3xl">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className="flex items-center justify-center focus:outline-none"
            >
              {logoIcon}
              <span className="sr-only">{logo}</span>
              <span className="acfix-logo">{logo}</span>
              <span className="hidden lg:block ml-12 text-base font-medium text-gray-50 hover:text-gray-200">
                {motto}
              </span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-blueGray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <span className="text-base font-medium text-gray-50">
              Need Help? Call us:{" "}
              <a className="underline" href={`tel:${phoneNumber}`}>
                {formatPhoneNumber(phoneNumber)}
              </a>
            </span>
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            {/* MOBILE VIEW */}
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-blueGray-800 divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="flex items-center justify-center focus:outline-none"
                  >
                    {logoIcon}
                    <span className="sr-only">{logo}</span>
                    <span className="acfix-logo">{logo}</span>
                  </Link>

                  <div className="-mr-2">
                    <Popover.Button className="bg-blueGray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-200 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-base font-medium text-gray-50 hover:text-gray-200">
                    {motto}
                  </p>
                  <span className="text-base font-medium text-gray-50">
                    Need Help? Call us:{" "}
                    <a className="underline" href={`tel:${phoneNumber}`}>
                      {formatPhoneNumber(phoneNumber)}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};
