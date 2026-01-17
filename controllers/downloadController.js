const { detectPlatform } = require("../config/platforms");
const { fetchMedia } = require("../utils/fetcher");

const handleDownload = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL required" });

  const platform = detectPlatform(url);

  try {
    const result = await fetchMedia(platform, url);
    if (!result) return res.status(400).json({ error: "Unsupported platform or failed to fetch" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Download failed", details: err.message });
  }
};

module.exports = { handleDownload };
