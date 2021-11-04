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

          if (data.status === 500) {
            setError(
              "Our system has detected an unexpected error. Please try again later."
            );
            return false;
          }

          if (data.message === "pending") {
            // handle code error
            setError(
              "You have entered an invalid code. Please make sure you have entered the appropriate code."
            );

            return false;
          } else {
            setError(null);
            return navigate("/thank-you");
          }
        });
      });
  } catch (error) {
    setError(
      "Our system has detected an unexpected error. Please try again later."
    );
  }
};
