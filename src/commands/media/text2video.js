const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "text2video",
    version: "1.0",
    author: "newton",
    countDown: 15,
    role: 0,
    shortDescription: "টেক্সট থেকে ভিডিও তৈরি করুন",
    longDescription: "দেয়া টেক্সট অনুযায়ী AI দিয়ে ভিডিও জেনারেট করে দিবে",
    category: "media",
    guide: "{pn} <describe a scene>"
  },

  onStart: async function ({ args, message }) {
    const prompt = args.join(" ");
    if (!prompt) {
      return message.reply("📽️ কী ভিডিও বানাবো সেটার টেক্সট দাও। যেমন:\n*text2video A cat flying in the sky");
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const endpoint = "https://api.openai.com/v1/videos/generations"; // উদাহরণ হিসেবে, Sora-like endpoint

    try {
      const res = await axios.post(endpoint, {
        model: "sora",
        prompt,
        quality: "standard",
        response_format: "url"
      }, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      });

      const videoUrl = res.data?.data?.[0]?.url;
      if (!videoUrl) {
        return message.reply("❌ ভিডিও লিংক পাওয়া যায়নি।");
      }

      const tempPath = path.join(__dirname, "temp", `video_${Date.now()}.mp4`);
      const video = await axios.get(videoUrl, { responseType: "stream" });
      const writer = fs.createWriteStream(tempPath);
      video.data.pipe(writer);

      writer.on("finish", () => {
        message.reply({
          body: "🎬 তোমার ভিডিও তৈরি!",
          attachment: fs.createReadStream(tempPath)
        }, () => {
          fs.unlinkSync(tempPath);
        });
      });
    } catch (err) {
      console.error(err);
      message.reply("❌ ভিডিও বানাতে সমস্যা হয়েছে। API key ঠিক আছে তো?");
    }
  }
};
