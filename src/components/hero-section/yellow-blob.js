import React from "react";

export const YellowBlob = () => {
  return (
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
  );
};
