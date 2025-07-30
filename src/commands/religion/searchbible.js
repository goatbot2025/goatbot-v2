const axios = require("axios");

module.exports = {
  config: {
    name: "searchbible",
    version: "1.0",
    author: "newton",
    shortDescription: "Search Bible verse",
    longDescription: "Search and get a Bible verse by providing book chapter and verse.",
    category: "religion",
    guide: "{pn} John 3:16"
  },

  onStart: async function ({ args, message }) {
    if (!args[0]) return message.reply("✝️ Please provide a Bible reference. Example:\n*searchbible John 3:16");

    const query = encodeURIComponent(args.join(" "));
    try {
      const res = await axios.get(`https://bible-api.com/${query}`);
      if (res.data.error) return message.reply(`❌ Error: ${res.data.error}`);
      const { reference, text, translation_name } = res.data;
      message.reply(`📖 ${reference} (${translation_name})\n\n"${text}"`);
    } catch (err) {
      message.reply("❌ Failed to fetch verse. Please try again.");
    }
  }
};
