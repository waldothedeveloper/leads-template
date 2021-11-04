import { useCallback, useEffect, useState } from "react";

import { finishPhoneVerification } from "../utils/finish-phone-verification";
import { verifyPhoneWithCode } from "../utils/verify-phone-with-code";

//
export const useValidatePhoneNumber = (phone) => {
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);
  const [codeSent, setCodeSent] = useState(false);
  console.log("codeSent: ", codeSent);

  useEffect(() => {
    const requestCode = () => {
      return verifyPhoneWithCode(phone, setError).then(() => setCodeSent(true));
    };

    if (phone && !codeSent) {
      return requestCode();
    }

    return () => setCodeSent(false);
  }, [phone, codeSent]);

  const handleChange = useCallback((event) => setCode(event.target.value), []);

  const handleSubmit = useCallback(
    (event) => {
      if (event) event.preventDefault();
      if (code && code.length === 6) {
        return finishPhoneVerification(phone, code, setError);
      }
      return false;
    },
    [phone, code]
  );

  const requestNewCode = () => {
    return verifyPhoneWithCode(phone, setError).then(() => setCodeSent(true));
  };

  return {
    code,
    error,
    handleChange,
    handleSubmit,
    requestNewCode,
  };
};
