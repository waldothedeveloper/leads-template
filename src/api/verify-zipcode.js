import fetch from "node-fetch";

const handler = async (req, res) => {
  const zip = req.query.query;

  // POST data to an authenticated API
  const url = `https://app.zipcodebase.com/api/v1/search?apikey=${process.env.ZIPCODEBASE_API}&codes=${zip}&country=US`;

  try {
    if (req.method !== "GET") {
      return res.status(404).json({ message: "This endpoint requires a GET" });
    }

    const result = await fetch(url).then((response) => {
      return response.json();
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default handler;
