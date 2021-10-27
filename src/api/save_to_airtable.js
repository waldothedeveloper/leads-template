const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const ENV = process.env.NODE_ENV;

//
const handler = (req, res) => {
  // this will determine the base prod vs dev
  const baseName = ENV === "development" ? "ACFIX-dev" : "ACFIX-production";
  console.log("baseName: ", baseName);

  //
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" });
    }

    const data = req.body;

    if (!data) {
      return res.status(500).json({ error: "There isn't any data." });
    }

    base(baseName).create(
      [
        {
          fields: {
            "Lead-Date": "2021-10-15T00:41:16.442Z",
            "What type of project is it?":
              "Repair or Service a Central Air Conditioning System",
            "Your project's ZIP code?":
              "city: Hialeah\n state: Florida\n zipcode: 33016\n",
            "Is this an emergency?": "NO",
            "What best describes the nature of the problem?":
              "No air conditioning in one location",
            "How old is your current air conditioning system? (in years)":
              "5 - 10 years",
            "Choose the appropriate status for this project":
              "Planing & Budgeting",
            "When would you like this request to be completed?":
              "Within 1 week",
            "Is this request covered by an insurance claim?": "NO",
            "Are you the owner or authorized to make property changes?": "NO",
            FullName: "Carmen Carvajal",
            "Phone Number": "786-374-8080",
            "Are you in the process of moving into or out of this home?": "NO",
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error("Airtable ERROR", err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
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
