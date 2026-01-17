const axios = require("axios");

const fetchMedia = async (platform, url) => {

  // 🔹 TikTok
  if (platform === "tiktok") {
    const api = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const { data } = await axios.get(api);

    return {
      platform: "tiktok",
      title: data.data.title,
      video: data.data.play,
      audio: data.data.music
    };
  }

  // 🔹 YouTube
  if (platform === "youtube") {
    return {
      platform: "youtube",
      note: "YouTube direct download not hosted",
      mp3: `https://api.vevioz.com/api/button/mp3?url=${encodeURIComponent(url)}`,
      mp4: `https://api.vevioz.com/api/button/videos?url=${encodeURIComponent(url)}`
    };
  }

  // 🔹 Facebook
  if (platform === "facebook") {
    return {
      platform: "facebook",
      note: "Use external downloader",
      download: `https://snapsave.app/action.php?url=${encodeURIComponent(url)}`
    };
  }

  // 🔹 Instagram
  if (platform === "instagram") {
    return {
      platform: "instagram",
      download: `https://igram.world/api/ig/media?url=${encodeURIComponent(url)}`
    };
  }

  return {
    error: "Unsupported platform"
  };
};

module.exports = { fetchMedia };
