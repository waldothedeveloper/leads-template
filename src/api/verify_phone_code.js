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

    if (!phone) {
      return res.status(500).json({ error: "There isn't any data." });
    }

    // paste below this line
    return client.verify
      .services(process.env.TWILIO_SERVICE_ID)
      .verifications.create({ to: phone, channel: "sms" })
      .then((verification) => {
        return res.status(200).json({ message: verification.status });
      });
  } catch (err) {
    // console.log("err on api fn phone code: ", err);
    return res
      .status(500)
      .json({ message: "There has been a big error.", error: err });
  }
};

module.exports = handler;
