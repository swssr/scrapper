const Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

module.exports = async (req, res) => {
  try {
    const results = await google.scrape("6007652000529", 10);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
