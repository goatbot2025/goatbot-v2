const { youtubeDl } = require("../../utils/downloader");

module.exports = {
  config: {
    name: "ytb",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "download",
    guide: {
      en: "{pn} [YouTube URL] - Download YouTube video or audio"
    }
  },

  onStart: async function ({ api, event, args }) {
    const url = args[0];
    if (!url || !url.includes("youtube.com")) {
      return api.sendMessage("❌ Provide a valid YouTube video URL.", event.threadID);
    }

    try {
      const result = await youtubeDl(url);
      api.sendMessage({
        body: `✅ YouTube ${result.type} downloaded:`,
        attachment: result.data
      }, event.threadID);
    } catch (e) {
      api.sendMessage("⚠️ Failed to download YouTube media.", event.threadID);
    }
  }
};
