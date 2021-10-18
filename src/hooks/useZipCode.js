import { stepMachine } from "../components/machines/zipcode-x-machine";
import { useCallback } from "react";
import { useMachine } from "@xstate/react";

export const useZipCode = () => {
  const [current, send] = useMachine(stepMachine);
  const error = current.context.errorMessage;
  const success =
    current.context.address !== null &&
    Object.keys(current.context.address).length > 0;

  const handleChange = useCallback(
    (event) => {
      const { value } = event.target;
      send("EDIT_ZIPCODE", { value });
    },
    [send]
  );

  const handleSubmit = useCallback((event) => {
    console.log("submitting the form");
    if (event) event.preventDefault();
    // send("NEXT");
    // save to database ?
  }, []);

  return { handleChange, handleSubmit, error, success, current };
};
