import React from "react";
import { classNames } from "../utils/classNames";
import { useHowItWorks } from "../hooks/useHowItWorks";

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
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {newData.map((post) => (
            <div key={post.id}>
              <div className="inline-block">
                <span
                  className={classNames(
                    post.color,
                    "inline-flex items-center px-3 py-0.5 rounded-full text-base font-medium"
                  )}
                >
                  {post.id + 1}
                </span>
              </div>

              <div className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
