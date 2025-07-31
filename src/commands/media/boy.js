const axios = require("axios");

module.exports = {
  config: {
    name: "boy",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Send a random boy photo",
    longDescription: "Sends a random high-quality boy image from API",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    try {
      const res = await axios.get("https://api.waifu.pics/sfw/bully"); // তুমি চাইলে এখান থেকে boy pic API আলাদা দিতে পারো
      const imageUrl = res.data.url;

      message.reply({
        body: "📸 Random Boy Pic:",
        attachment: await global.utils.getStreamFromURL(imageUrl)
      });
    } catch (err) {
      console.error(err);
      message.reply("❌ ছবি আনতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    }
  }
};
