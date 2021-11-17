const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE
);

const ENV = process.env.NODE_ENV;

//
const handler = (req, res) => {
  // this will determine the base prod vs dev
  const baseName = ENV === "development" ? "ACFIX-dev" : "ACFIX-production";

  //
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" });
    }

    const recordID = req.body;

    if (!recordID) {
      return res.status(500).json({
        error: "There isn't any data. Please provide a valid record ID",
      });
    }

    // paste below this line
    base(baseName).update(
      [
        {
          id: recordID,
          fields: {
            Verified: "YES",
          },
        },
      ],
      (err, records) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: `There was an error trying to update the record ${recordID}`,
            error: err,
          });
        }

        return res.status(200).json({
          status: 200,
          message: "The lead has been updated on the database",
          confirmed: records.map((record) => record.get("Verified")),
        });
      }
    );
  } catch (err) {
    return res
      .status(500)
      .json({ message: "There has been a big error.", error: err });
  }
};

module.exports = handler;
