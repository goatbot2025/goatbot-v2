const ytdl = require("ytdl-core");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "sing",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "গান প্লে করুন",
    longDescription: "YouTube থেকে গান সার্চ করে অডিও আকারে প্লে করে দিবে",
    category: "media",
    guide: "{pn} <song name>"
  },

  onStart: async function ({ args, message }) {
    const query = args.join(" ");
    if (!query) {
      return message.reply("🎵 কোন গানের নাম দিবে? যেমন: *sing ami tomar hoye jabo");
    }

    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            q: query,
            key: process.env.YOUTUBE_API_KEY,
            maxResults: 1,
            type: "video"
          }
        }
      );

      if (!res.data.items.length) {
        return message.reply("😔 কিছুই পেলাম না, আরেকটু স্পষ্ট করে বলো।");
      }

      const videoId = res.data.items[0].id.videoId;
      const title = res.data.items[0].snippet.title;
      const url = `https://www.youtube.com/watch?v=${videoId}`;
      const audioPath = path.join(__dirname, "temp", `${videoId}.mp3`);

      const stream = ytdl(url, { filter: "audioonly" });
      const file = fs.createWriteStream(audioPath);
      stream.pipe(file);

      file.on("finish", async () => {
        message.reply({
          body: `🎶 ${title}`,
          attachment: fs.createReadStream(audioPath)
        }, () => {
          fs.unlinkSync(audioPath);
        });
      });
    } catch (err) {
      console.error(err);
      message.reply("❌ গান আনতে সমস্যা হয়েছে। API key ঠিক আছে তো?");
    }
  }
};
