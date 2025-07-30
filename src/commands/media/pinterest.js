const axios = require("axios");
module.exports = {
  config: {
    name: "pinerest",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Search Pinterest image",
    longDescription: "Search Pinterest by keyword and return image",
    category: "media",
    guide: "{pn} <keyword>"
  },
  onStart: async function ({ message, args }) {
    const search = args.join(" ");
    if (!search) return message.reply("Please provide a keyword.");
    const url = `https://api-dien.senthan.repl.co/pinterest?search=${encodeURIComponent(search)}`;
    try {
      const res = await axios.get(url);
      message.send({
        body: `🔍 Result for: ${search}`,
        attachment: await global.utils.getStreamFromURL(res.data.url)
      });
    } catch {
      message.reply("❌ Failed to fetch image.");
    }
  }
};
