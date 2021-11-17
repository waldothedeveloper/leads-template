import { useCallback } from "react";
import { useMachine } from "@xstate/react";
import { verifyCodeMachine } from "../components/machines/verify-code-machine";

export const useSMSverificationProcess = (phone, recordID) => {
  const [state, send] = useMachine(() => verifyCodeMachine(phone, recordID));
  const { code, errorMessage, attempts } = state.context;

  const disabled = ["idle", "smsCodeNotSent", "validating"].some(state.matches);
  const disableSubmit = disabled || code.length < 6;

  const handleOnChange = useCallback(
    (event) => {
      send("CHANGE", event.target);
    },
    [send]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    return send("SUBMIT_CODE");
  };

  return {
    handleOnChange,
    handleSubmit,
    disableSubmit,
    disabled,
    errorMessage,
    attempts,
    code,
    state,
    send,
  };
};
