const axios = require("axios");

module.exports = {
  config: {
    name: "lyrics",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Get song lyrics",
    longDescription: "Fetch lyrics of a song",
    category: "info",
    guide: "{pn} <song name>"
  },

  onStart: async function ({ message, args }) {
    const query = args.join(" ");
    if (!query) return message.send("🎵 গানটির নাম দাও!");

    try {
      const res = await axios.get(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(query)}`);
      const song = res.data;
      message.send(`🎶 ${song.title} by ${song.author}\n\n${song.lyrics}`);
    } catch (err) {
      message.send("❌ লিরিক্স খুঁজে পাওয়া যায়নি।");
    }
  }
};
