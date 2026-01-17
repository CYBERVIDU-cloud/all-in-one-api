const axios = require("axios");

const fetchMedia = async (platform, url) => {
  if (platform === "tiktok") {
    const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const { data } = await axios.get(apiUrl);
    return {
      platform,
      title: data.data.title,
      video: data.data.play,
      audio: data.data.music
    };
  }

  if (platform === "youtube") {
    // Example using external service
    return {
      platform,
      message: "Use external converter",
      link: `https://api.vevioz.com/api/button/mp3?url=${encodeURIComponent(url)}`
    };
  }

  if (platform === "facebook") {
    return {
      platform,
      message: "Use SnapSave / external FB downloader",
      link: `https://snapsave.app/action.php?url=${encodeURIComponent(url)}`
    };
  }

  if (platform === "instagram") {
    return {
      platform,
      message: "Instagram media detected",
      link: `https://igram.world/api/ig/media?url=${encodeURIComponent(url)}`
    };
  }

  return null;
};

module.exports = { fetchMedia };
