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

    const data = req.body;
    const { phone, code } = JSON.parse(data);

    if (!req.body) {
      return res.status(500).json({ error: "There isn't any data." });
    }

    // paste below this line
    return client.verify
      .services(process.env.TWILIO_SERVICE_ID)
      .verificationChecks.create({ to: phone, code })
      .then((verification_check) => {
        return res.status(200).json({ message: verification_check.status });
      });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "There has been a big error.", error: err });
  }
};

module.exports = handler;
