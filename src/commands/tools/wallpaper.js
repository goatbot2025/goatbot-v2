const axios = require("axios");

module.exports = {
  config: {
    name: "wallpaper",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Random HD wallpaper",
    longDescription: "Get a random wallpaper from API",
    category: "tools",
    guide: "{pn} <query>"
  },

  onStart: async function ({ args, message }) {
    const query = args.join(" ") || "nature";
    try {
      const res = await axios.get(`https://api.erdwpe.com/wallpaper?search=${encodeURIComponent(query)}`);
      const image = res.data.result;
      if (!image) return message.reply("❌ ওয়ালপেপার খুঁজে পাওয়া যায়নি।");

      message.send({
        body: `🖼️ আপনার "${query}" wallpaper:`,
        attachment: await global.utils.getStreamFromURL(image)
      });
    } catch (e) {
      console.error(e);
      message.reply("❌ wallpaper আনতে সমস্যা হয়েছে।");
    }
  }
};
