const axios = require("axios");

module.exports = {
  config: {
    name: "ytb",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "Download YouTube video",
    longDescription: "Download video from YouTube using URL",
    category: "media",
    guide: "{pn} <YouTube video URL>"
  },

  onStart: async function ({ args, message }) {
    const url = args[0];
    if (!url || !url.includes("youtube.com") && !url.includes("youtu.be")) {
      return message.reply("🔗 একটি বৈধ YouTube লিংক দিন!\nউদাহরণ: *ytb https://youtu.be/xyz");
    }

    try {
      const res = await axios.get(`https://api.flamingtext.tech/ytdl?url=${encodeURIComponent(url)}&apikey=AIzaSyA9XfU1uQsP1pyo3GBZdke_NXq1zKXbxxk`);
      if (!res.data || !res.data.result || !res.data.result.video) {
        return message.reply("❌ ভিডিও ডাউনলোড করতে সমস্যা হয়েছে।");
      }

      const videoUrl = res.data.result.video;
      const title = res.data.result.title || "YouTube Video";

      message.reply({
        body: `📥 ${title}`,
        attachment: await global.utils.getStreamFromURL(videoUrl)
      });

    } catch (err) {
      console.error(err);
      message.reply("❌ অনুরোধ প্রক্রিয়াকরণে ত্রুটি ঘটেছে। পরে আবার চেষ্টা করুন।");
    }
  }
};
