import { navigate } from "gatsby-link";
//
export const verifyPhoneWithCode = async (phone, setError) => {
  try {
    await window
      .fetch(`/api/verify_phone_code`, {
        method: `POST`,
        body: phone,
      })
      .then((res) => {
        return res.json().then((data) => {
          if (data.status === 429) {
            navigate("/not-allowed", {
              state: {
                code: data.status,
                message: data.message,
              },
            });
          }

          if (data.message !== "pending") {
            setError(
              "Our system has detected an unexpected error. Please try again later."
            );
          }

          return data;
        });
      });
  } catch (error) {
    setError(
      "Our system has detected an unexpected error. Please try again later."
    );
  }
};
