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
          if (data.message !== "pending") {
            setError("We have found an unexpected error. Try again later.");
          }

          return data;
        });
      });
  } catch (error) {
    // console.log("error on VerifyPhoneWithCode: ", error);
    setError("We have found an unexpected error. Try again later.");
  }
};
