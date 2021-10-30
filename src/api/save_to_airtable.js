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

    const data = req.body;

    if (!data) {
      return res.status(500).json({ error: "There isn't any data." });
    }

    // paste below this line
    base(baseName).create(
      [
        {
          fields: data,
        },
      ],
      (err, records) => {
        if (err) {
          // console.error(err);
          return err;
        }
        return records;
      }
    );

    // return ok
    return res.status(200).json({ message: "Lead saved on database" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "There has been a big error.", error: err });
  }
};

module.exports = handler;
