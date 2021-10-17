import React from "react";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const cardDetails = [
  {
    id: 1,
    unit: "7K+",
    description: "Happy Customers",
    ping_full:
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75",
    ping_fixed: "relative inline-flex rounded-full h-3 w-3 bg-yellow-500",
  },
  {
    id: 2,
    unit: "$300-1K+",
    description: "Cost Savings",
    ping_full:
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75",
    ping_fixed: "relative inline-flex rounded-full h-3 w-3 bg-rose-500",
  },
  {
    id: 3,
    unit: "96%",
    description: "Same Day Repairs",
    ping_full:
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75",
    ping_fixed: "relative inline-flex rounded-full h-3 w-3 bg-cyan-500",
  },
];

// some stats
// ! Each day in Florida, 36 people need ac repair
// ! Florida ranks 3rd in ac repairs
//! There are AC repair events the most often in Jacksonville, FL, followed by Orlando-Daytona and Tampa.
export const Card = () => {
  return (
    <div className="xl:mt-12">
      {posts.map((post) => (
        <div key={post.title} className="flex flex-col overflow-hidden">
          <div className="flex-1 px-2.5 py-3 md:py-6 xl:p-6 flex flex-col justify-between mx-auto">
            <div className="flex-1 w-full">
              {/* yellow blob only for sm viewports */}
              <div className="animate-wiggle absolute inset-0 xl:hidden">
                <div className="transform translate-x-32">
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
                      <p className="font-medium text-lg text-blueGray-800">
                        {card.unit}
                      </p>
                      <p className="ml-2 text-base text-blueGray-800 font-semibold">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
