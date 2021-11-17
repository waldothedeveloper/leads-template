import { navigate } from "gatsby";

export const saveToDB = async (data) => {
  // console.log("saveToDB: ", data);
  const prefix = "+1";
  const phone = data["What is your phone number?"];
  const cleanPhone = phone.replace(/\D+/g, "");
  const finalPhone = prefix.concat(cleanPhone);

  try {
    await window
      .fetch(`/api/save_to_airtable`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => {
        return res.json().then((data) => {
          return navigate("/verify-code", {
            state: {
              phone: finalPhone,
              recordID: data.recordID,
            },
          });
        });
      });
  } catch (error) {
    return {
      status: 500,
      message: "There was an unknown error. Try again or give us a call.",
    };
  }
};
