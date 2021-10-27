import { navigate } from "gatsby";
export const saveToDB = async (data) => {
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
        console.log("res: ", res);
        res.json();
        console.log("HERE YOU WILL NAVIGATE TO VERIFY PHONE NUMBER WITH CODE");
      });
  } catch (error) {
    console.log("error: ", error);
  }
};
