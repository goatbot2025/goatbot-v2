const axios = require("axios");

module.exports = {
  config: {
    name: "movie",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Get movie info",
    longDescription: "Fetch movie information by title",
    category: "information",
    guide: "{pn} <movie name>"
  },

  onStart: async function ({ message, args }) {
    const query = args.join(" ");
    if (!query) return message.send("🎥 মুভির নাম দাও!");

    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&t=${encodeURIComponent(query)}`);
      const m = res.data;
      if (m.Response === "False") return message.send("❌ মুভি পাওয়া যায়নি!");

      message.send(`🎬 ${m.Title} (${m.Year})\n⭐ Rating: ${m.imdbRating}\n📚 Genre: ${m.Genre}\n📖 Plot: ${m.Plot}`);
    } catch {
      message.send("❌ মুভির তথ্য আনতে সমস্যা হয়েছে!");
    }
  }
};
