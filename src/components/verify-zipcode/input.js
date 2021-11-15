import { AddressMessage } from "./address-message";
import { InputControl } from "./input-control";
import { InputLabel } from "./input-label";
import React from "react";
import { useZipCode } from "../../hooks/useZipCode";

export const ZipCodeInput = () => {
  const { handleChange, handleSubmit, error, success, current } = useZipCode();

  //
  return (
    <div className="mt-12 w-full z-20">
      <form onSubmit={handleSubmit}>
        <InputLabel success={success} error={error} />
        <InputControl
          current={current}
          handleChange={handleChange}
          error={error}
          success={success}
        />
      </form>
      <AddressMessage current={current} success={success} />
    </div>
  );
};
