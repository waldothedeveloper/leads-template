const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

//
const handler = (req, res) => {
  //
  try {
    if (req.method !== "POST") {
      return res
        .status(404)
        .json({ message: "This endpoint requires a POST request!" });
    }

    const data = req.body;

    // no data no laudry
    if (!data || Object.keys(data).length === 0) {
      return res.status(500).json({
        error: "Phone number or code cannot be blank",
        status: 500,
      });
    }

    //
    const { phone, code } = JSON.parse(data);
    // no phone or no code well... no laudry
    if (!phone || !code) {
      return res.status(500).json({
        error: "Please provide a valid phone number and a valid code",
        status: 500,
      });
    }

    // paste below this line
    return client.verify
      .services(process.env.TWILIO_SERVICE_ID)
      .verificationChecks.create({ to: phone, code })
      .then((verification_check) => {
        if (verification_check.status === "pending") {
          return res
            .status(500)
            .json({ status: 500, message: verification_check.status });
        }

        return res
          .status(200)
          .json({ message: verification_check.status, status: 200 });
      });
  } catch (err) {
    return res.status(500).json({
      message: "Our system has detected an unexpected error.",
      status: 500,
      error: err,
    });
  }
};

module.exports = handler;
