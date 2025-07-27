const { downloadMedia } = require("../../utils/downloader");

module.exports = {
  config: {
    name: "download",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "download",
    guide: {
      en: "{pn} [URL] - Download media from link"
    }
  },

  onStart: async function ({ api, event, args }) {
    const url = args[0];
    if (!url || !url.startsWith("http")) {
      return api.sendMessage("❌ Please provide a valid URL.", event.threadID);
    }

    try {
      const result = await downloadMedia(url);
      api.sendMessage({
        body: "✅ Media downloaded:",
        attachment: result
      }, event.threadID);
    } catch (e) {
      api.sendMessage("⚠️ Download failed.", event.threadID);
    }
  }
};
