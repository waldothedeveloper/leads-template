import React from "react";

export const DottedSVG = () => {
  return (
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
  );
};
