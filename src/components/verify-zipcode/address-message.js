import React from "react";

export const AddressMessage = ({ success, current }) => {
  return (
    success && (
      <p className="mt-2 text-md text-cyan-700 text-left pl-1 font-medium">
        {current.context.address.city}, {current.context.address.state}
      </p>
    )
  );
};
