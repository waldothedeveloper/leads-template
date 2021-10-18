import { useCallback, useEffect } from "react";

import { navigate } from "gatsby-link";
import { stepMachine } from "../components/machines/zipcode-x-machine";
import { useMachine } from "@xstate/react";

export const useZipCode = () => {
  const [current, send] = useMachine(stepMachine);
  const error = current.context.errorMessage;
  const success =
    current.context.address !== null &&
    Object.keys(current.context.address).length > 0;

  useEffect(() => {
    if (current.matches("verified")) {
      navigate("/quiz-conversion");
    }
  }, [current]);

  const handleChange = useCallback(
    (event) => {
      const { value } = event.target;
      send("EDIT_ZIPCODE", { value });
    },
    [send]
  );

  const handleSubmit = useCallback(
    (event) => {
      if (event) event.preventDefault();

      send("NEXT");
    },
    [send]
  );

  return { handleChange, handleSubmit, error, success, current };
};
