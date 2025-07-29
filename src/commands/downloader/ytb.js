const axios = require("axios");

module.exports = {
  config: {
    name: "ytb",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Download YouTube video",
    longDescription: "Download video or audio from YouTube using link or keywords",
    category: "download",
    guide: "{pn} [YouTube link or search text]"
  },

  onStart: async function ({ args, message, event }) {
    const query = args.join(" ");
    if (!query) return message.reply("🔍 Please provide a YouTube link or search keyword.");

    const apiKey = process.env.YT_API_KEY;
    const apiUrl = `https://youtube-api-2024.vercel.app/api/ytv2?query=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
      const res = await axios.get(apiUrl);
      const data = res.data;

      if (!data || !data.video_url) {
        return message.reply("❌ Failed to fetch video. Try again with different link or keyword.");
      }

      const stream = await global.utils.getStreamFromURL(data.video_url);
      const info = `📹 Title: ${data.title}\n📦 Size: ${data.size}\n⏱️ Duration: ${data.duration}\n📎 Quality: ${data.quality}\n\n🎬 Sending video...`;

      message.send({ body: info, attachment: stream });
    } catch (err) {
      console.error(err);
      message.reply("❌ Error while fetching video.");
    }
  }
};
