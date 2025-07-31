const axios = require("axios");
module.exports = {
  config: { name: "imgsearch", version: "1.0", author: "newton", role: 0, shortDescription: "Search image from Imgur", category: "image", guide: "{pn} <query>" },
  onStart: async function({ args, message }) {
    const query = args.join(" ");
    if (!query) return message.reply("⚠️ Provide search keyword.");
    try {
      const res = await axios.get("https://api.imgur.com/3/gallery/search", {
        headers: { Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}` },
        params: { q: query }
      });
      const images = res.data.data.slice(0, 4).map(i => `${i.link}`);
      if (!images.length) return message.reply("❌ No images found.");
      message.reply(images.join("\n"));
    } catch {
      message.reply("❌ Search failed.");
    }
  }
};
