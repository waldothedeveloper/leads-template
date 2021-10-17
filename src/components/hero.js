import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";
import { useHero } from "../hooks/useHero";
export const Hero = () => {
  const {
    leadingHeroText,
    mindBlowingHeroText,
    nearYouHeroText,
    testimonial,
    heroImage,
    phoneNumber,
  } = useHero();

  //
  return (
    <>
      <div className="bg-blueGray-100 pb-8 sm:pb-12 lg:pb-12 relative">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 relative">
            {/* little testimonial section */}
            <div className="absolute top-0 lg:left-4 -mt-16 lg:-mt-0 px-4">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-12 w-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=6&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-700 max-w-xs">
                    {testimonial}
                  </p>
                </div>
              </div>
            </div>
            {/* end of little testimonial section */}
            <div>
              <div className="mt-20">
                <div>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center text-gray-50
                    bg-blueGray-900 rounded-full p-1 sm:text-base lg:text-sm
                    xl:text-base hover:text-gray-200 z-10"
                  >
                    <span className="px-3 py-1 text-gray-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                      FREE estimates 🤩
                    </span>
                    <span className="mx-2">
                      <lord-icon
                        delay="1500"
                        src="https://cdn.lordicon.com/ltxkhbfa.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#06b6d4"
                      />
                    </span>
                    <span className="mr-4 text-base">
                      {formatPhoneNumber(phoneNumber)}
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl relative z-10">
                  <div className="relative animate-wiggle -z-1">
                    <div className="absolute -top-10 left-8">
                      {/* yellow blob */}
                      <svg
                        id="visual"
                        viewBox="0 0 900 900"
                        width="150"
                        height="250"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                      >
                        <g transform="translate(515.3464575876709 432.1677388217141)">
                          <path
                            d="M183.2 -204.5C220.7 -145.7 222.8 -72.8 239.3 16.5C255.8 105.8 286.7 211.7 249.2 277.8C211.7 344 105.8 370.5 7.2 363.3C-91.5 356.1 -182.9 315.2 -257.9 249.1C-332.9 182.9 -391.5 91.5 -397.2 -5.8C-403 -103 -356 -206 -281 -264.8C-206 -323.7 -103 -338.3 -15.1 -323.3C72.8 -308.2 145.7 -263.3 183.2 -204.5"
                            fill="#FEF9C3"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <h1 className="text-4xl font-extrabold text-blueGray-900 tracking-tight sm:text-5xl">
                    {leadingHeroText}
                    {` `}
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                      {mindBlowingHeroText}
                      {` `}
                    </span>
                    {` `}
                    {nearYouHeroText}
                  </h1>
                </div>
                <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                  {/* here you should use the ZIPCODE component */}
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                {/* little cyan background behind image */}
                <div className="absolute inset-y-0 left-1/2 w-screen bg-cyan-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />

                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-yellow-400"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <GatsbyImage
                  className="w-full shadow-xl rounded-md ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  image={heroImage.gatsbyImageData}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
