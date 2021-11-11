const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" });
    }

    const phone = req.body;
    // console.log("phone to validate: ", phone);

    if (!phone) {
      return res
        .status(500)
        .json({ message: "Please provide a valid phone number", status: 500 });
    }

    return client.lookups.v1
      .phoneNumbers(phone)
      .fetch({ countryCode: "US", type: ["carrier"] })
      .then((data) => {
        return res.status(200).json({
          valid_phone: data.phoneNumber,
          nationalFormat: data.nationalFormat,
          type: data.carrier.type,
          status: 200,
        });
      })
      .catch((error) => {
        // console.log("error: ", error);
        if (error.status === 404 || error.code === 20404) {
          return res.status(500).json({
            message: "Please enter a valid phone number",
            status: error.status,
          });
        }
        return res.status(500).json({
          message: "Something went wrong. Try again later",
          status: error.status,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: "There has been a big error.",
      error: error,
      status: 500,
    });
  }
};

module.exports = handler;
