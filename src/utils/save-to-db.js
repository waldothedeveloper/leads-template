import { navigate } from "gatsby";

export const saveToDB = async (data) => {
  const prefix = "+1";
  const phone = data["What is your phone number?"];
  const cleanPhone = phone.replace(/-/g, "");
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
        return navigate("/verify-code", {
          state: {
            phone: finalPhone,
          },
        });
      });
  } catch (error) {
    // console.log("error: ", error);
  }
};
