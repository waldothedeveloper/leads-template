import React from "react";

export const AddressMessage = ({ success, current }) => {
  const { city, state } =
    current.context.address !== null && current.context.address;
  return (
    success && (
      <p className="mt-2 text-md text-cyan-700 text-left pl-1 font-medium">
        {city}, {state}
      </p>
    )
  );
};
