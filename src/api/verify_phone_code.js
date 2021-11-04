const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

//
const handler = (req, res) => {
  //
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" });
    }

    const phone = req.body;

    if (!phone || Object.keys(phone).length === 0) {
      return res
        .status(500)
        .json({ error: "Please provide a valid phone number", status: 500 });
    }

    // paste below this line
    return client.verify
      .services(process.env.TWILIO_SERVICE_ID)
      .verifications.create({ to: phone, channel: "sms" })
      .then((verification) => {
        // console.log("verification: ", verification);
        if (verification.status === "pending") {
          return res.status(200).json({
            message: verification.status,
            attempts: verification.sendCodeAttempts,
          });
        }
      })
      .catch((err) => {
        // console.log("Error inside verify", err);
        if (err.status === 429) {
          return res.status(429).json({
            message: "You have reached your limit for verification attempts",
            status: err.status,
          });
        }
      });
  } catch (err) {
    // console.log("err on api fn phone code: ", err);
    return res.status(500).json({
      message: "There has been a big error.",
      error: err,
      status: 500,
    });
  }
};

module.exports = handler;
