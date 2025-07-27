const { downloadMedia } = require("../../utils/downloader");

module.exports = {
  config: {
    name: "alldl",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "download",
    guide: {
      en: "{pn} [url] - Download media from any supported URL"
    }
  },

  onStart: async function ({ api, event, args }) {
    const url = args[0];
    if (!url) return api.sendMessage("❌ Please provide a URL.", event.threadID);

    try {
      const result = await downloadMedia(url);
      api.sendMessage({
        body: `✅ Downloaded from: ${url}`,
        attachment: result
      }, event.threadID);
    } catch (e) {
      api.sendMessage("⚠️ Failed to download. Please check the URL.", event.threadID);
    }
  }
};
