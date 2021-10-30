import { navigate } from "gatsby";
export const finishPhoneVerification = async (phone, code, setError) => {
  try {
    await window
      .fetch(`/api/finish_phone_code_verification`, {
        method: `POST`,
        body: JSON.stringify({ phone, code }),
      })
      .then((res) => {
        return res.json().then((data) => {
          // console.log("response on phone verification", data);
          if (data.message === "pending") {
            // handle code error
            setError(
              "The code is invalid. Check your code or request a new one"
            );

            return data;
          } else {
            setError(null);
            return navigate("/thank-you");
          }
        });
      });
  } catch (error) {
    // console.log("error on finishPhoneVerification: ", error);
    setError("We have found an unexpected error. Try again later.");
  }
};
