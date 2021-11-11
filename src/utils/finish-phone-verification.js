export const finishPhoneVerification = ({ code, phone }) => {
  try {
    return fetch(`/api/finish_phone_code_verification`, {
      method: `POST`,
      body: JSON.stringify({ phone: phone, code: code }),
    }).then((res) => res.json());
  } catch (error) {
    console.log("finishPhoneVerification => error: ", error);
    return error;
  }
};
