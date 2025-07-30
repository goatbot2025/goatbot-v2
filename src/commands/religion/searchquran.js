const axios = require("axios");

module.exports = {
  config: {
    name: "searchquran",
    version: "1.0",
    author: "newton",
    shortDescription: "Search Quran verse",
    longDescription: "Search Quran verse by Surah and Ayah",
    category: "religion",
    guide: "{pn} 2 255"
  },

  onStart: async function ({ args, message }) {
    if (args.length < 2) return message.reply("🕌 Provide Surah and Ayah. Example:\n*searchquran 2 255");

    const [surah, ayah] = args;
    try {
      const res = await axios.get(`http://api.alquran.cloud/v1/ayah/${surah}:${ayah}/en.asad`);
      const { text, surah: surahInfo } = res.data.data;
      message.reply(`📖 Surah ${surahInfo.englishName} (${surah}:${ayah})\n\n"${text}"`);
    } catch (err) {
      message.reply("❌ Could not fetch Quran verse.");
    }
  }
};
