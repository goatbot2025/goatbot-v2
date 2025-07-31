const axios = require("axios");

module.exports = {
  config: {
    name: "girl",
    version: "1.0",
    author: "newton",
    role: 0,
    shortDescription: "Send random girl image",
    longDescription: "Sends a random image of a girl using external API",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    try {
      const res = await axios.get("https://api.erdwpe.com/girl?apikey=San6GZdCiTLNVKU9-45J_NXi4lbo_GseysZRWWJCvIjEpxJWAgXE-1dGzV8qvYoIEg7O09FpA6ZciDs-UIWi0A");
      const imageUrl = res.data.result;

      message.reply({
        body: "👧 Here's a random girl image:",
        attachment: await global.utils.getStreamFromURL(imageUrl)
      });
    } catch (err) {
      console.error(err);
      message.reply("❌ গার্ল ইমেজ আনতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    }
  }
};
