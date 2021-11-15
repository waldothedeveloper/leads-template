// import { navigate } from "gatsby-link";

export const sendVerificationCode = (phone) => {
  try {
    return fetch(`/api/send_sms_to_phone`, {
      method: `POST`,
      body: phone,
    }).then((res) => res.json());
  } catch (error) {
    // console.log("sendVerificationCode => ERROR: ", error);s
    return {
      status: 500,
      message: "There was an unknown error. Try again or give us a call.",
    };
  }
};
