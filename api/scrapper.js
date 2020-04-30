const Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});

module.exports = async (req, res) => {
  try {
    if (req.params.query) {
      const results = await google.scrape(req.params.query, 4);

      res.status(200).json({ results });
    } else {
      throw new Error("No query provided!");
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};
