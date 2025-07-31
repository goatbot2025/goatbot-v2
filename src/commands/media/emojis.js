const axios = require("axios");

module.exports = {
  config: {
    name: "emojis",
    version: "1.0",
    author: "newton",
    role: 0,
    shortDescription: "Random emoji image",
    longDescription: "Sends a random emoji-style image",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    try {
      const res = await axios.get("https://api.erdwpe.com/emojis?apikey=San6GZdCiTLNVKU9-45J_NXi4lbo_GseysZRWWJCvIjEpxJWAgXE-1dGzV8qvYoIEg7O09FpA6ZciDs-UIWi0A");
      const imageUrl = res.data.result;
      message.reply({
        body: "🖼️ Here is your emoji image:",
        attachment: await global.utils.getStreamFromURL(imageUrl)
      });
    } catch (err) {
      console.error(err);
      message.reply("❌ ইমোজি ইমেজ আনতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    }
  }
};
