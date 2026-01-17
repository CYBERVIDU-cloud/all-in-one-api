const { detectPlatform } = require("../config/platforms");
const { fetchMedia } = require("../utils/fetcher");

const handleDownload = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  const platform = detectPlatform(url);

  try {
    const data = await fetchMedia(platform, url);
    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch media",
      details: err.message
    });
  }
};

module.exports = { handleDownload };
