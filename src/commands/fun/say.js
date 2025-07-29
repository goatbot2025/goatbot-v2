const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "say",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Text to speech",
    longDescription: "Convert text to speech using VoiceRSS API",
    category: "fun",
    guide: "{pn} <text>"
  },

  onStart: async function ({ args, message }) {
    const text = args.join(" ");
    if (!text) return message.reply("❌ দয়া করে বলার জন্য কিছু লিখো।");

    const apiKey = "ba37c9cfdd1f4751a2534c889d6b5d70";
    const url = `https://api.voicerss.org/?key=${apiKey}&hl=bn-bd&src=${encodeURIComponent(text)}&c=MP3`;

    const filePath = path.join(__dirname, "voice.mp3");
    try {
      const response = await axios({
        url,
        method: "GET",
        responseType: "stream"
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      writer.on("finish", () => {
        message.send({
          body: `🗣️ বলছি: "${text}"`,
          attachment: fs.createReadStream(filePath)
        });
      });
    } catch (err) {
      console.error(err);
      message.reply("⚠️ ভয়েস তৈরিতে সমস্যা হয়েছে। পরে আবার চেষ্টা করো।");
    }
  }
};
