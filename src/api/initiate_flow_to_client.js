const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405).send({
        message: "Method not allowed. This endpoint requires a POST request.",
      });
    }

    const verifiedCustomerPhone = req.body;
    // console.log("verifiedCustomerPhone IS: ", verifiedCustomerPhone);

    if (!verifiedCustomerPhone) {
      res.status(400).send({
        message: "Missing customer phone number",
      });
    }

    return client.studio
      .flows(process.env.TWILIO_FLOW)
      .executions.create({ to: verifiedCustomerPhone, from: "+7863212597" })
      .then((execution) =>
        res.json({
          status: execution.status,
          sid: execution.sid,
        })
      );
  } catch (error) {
    // console.log("error on INITIATE FLOW TO CLIENT: ", error);
    return res.status(error.status).json({
      message: error.message,
      code: error.code,
      status: error.status,
    });
  }
};

module.exports = handler;
