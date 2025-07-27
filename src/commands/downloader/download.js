const { facebookDl } = require("../../utils/downloader");

module.exports = {
  config: {
    name: "fbdl",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "download",
    guide: {
      en: "{pn} [Facebook video URL] - Download Facebook video"
    }
  },

  onStart: async function ({ api, event, args }) {
    const url = args[0];
    if (!url || !url.includes("facebook.com")) {
      return api.sendMessage("❌ Please provide a valid Facebook video URL.", event.threadID);
    }

    try {
      const video = await facebookDl(url);
      api.sendMessage({
        body: "✅ Facebook video downloaded:",
        attachment: video
      }, event.threadID);
    } catch (e) {
      api.sendMessage("⚠️ Failed to download Facebook video.", event.threadID);
    }
  }
};
