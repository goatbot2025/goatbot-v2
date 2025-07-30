const axios = require("axios");

module.exports = {
  config: {
    name: "searchgita",
    version: "1.0",
    author: "newton",
    shortDescription: "Search Bhagavad Gita",
    longDescription: "Get a verse from the Bhagavad Gita by chapter and verse number",
    category: "religion",
    guide: "{pn} 2 47"
  },

  onStart: async function ({ args, message }) {
    if (args.length < 2) return message.reply("🕉️ Provide chapter and verse. Example:\n*searchgita 2 47");

    const [chapter, verse] = args;
    try {
      const res = await axios.get(`https://bhagavadgitaapi.in/slok/${chapter}/${verse}`);
      const data = res.data;
      message.reply(`📿 Chapter ${chapter}, Verse ${verse}\n\n"${data.slok}"\n\nTranslation: ${data.tej.ht}`);
    } catch (err) {
      message.reply("❌ Failed to fetch Gita verse.");
    }
  }
};
