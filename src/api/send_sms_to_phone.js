const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

//
const handler = async (req, res) => {
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
    return await client.verify
      .services(process.env.TWILIO_SERVICE_ID)
      .verifications.create({
        to: phone,
        channel: "sms",
      })
      .then((verification) =>
        res.json({
          attempts: verification.sendCodeAttempts,
          type: verification.lookup.carrier.type,
          status: verification.status,
        })
      );
  } catch (err) {
    // console.log("err on send sms to phone: ", err);
    return res.status(err.status).json({
      message: "Our system has detected an unexpected error.",
      code: err.code,
      status: err.status,
    });
  }
};

module.exports = handler;
