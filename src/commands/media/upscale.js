const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "upscale",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "Low-res ছবিকে High-res এ রূপান্তর",
    longDescription: "DeepAI এর মাধ্যমে ছবির কোয়ালিটি উন্নত করুন",
    category: "media",
    guide: "{pn} [reply a photo]"
  },

  onStart: async function ({ message, event }) {
    const { type, messageReply } = event;
    if (
      type !== "message_reply" ||
      !messageReply.attachments ||
      messageReply.attachments[0].type !== "photo"
    ) {
      return message.reply("📷 দয়া করে একটি ছবিতে রিপ্লাই দিন যেটা আপস্কেল করতে চান।");
    }

    const photoUrl = messageReply.attachments[0].url;
    const apiKey = process.env.ANIMEVOICE_API_KEY || "quickstart-QUdJIGlzIGNvbWluZy4uLi4K"; // fallback
    const endpoint = "https://api.deepai.org/api/torch-srgan";

    try {
      const res = await axios.post(
        endpoint,
        { image: photoUrl },
        { headers: { "api-key": apiKey } }
      );

      const upscaledUrl = res.data.output_url;
      const imgPath = path.join(__dirname, "temp", `upscaled_${Date.now()}.jpg`);
      const imgData = await axios.get(upscaledUrl, { responseType: "stream" });

      const writer = fs.createWriteStream(imgPath);
      imgData.data.pipe(writer);

      writer.on("finish", () => {
        message.reply({
          body: "🖼️ তোমার আপস্কেল করা ইমেজ:",
          attachment: fs.createReadStream(imgPath)
        }, () => {
          fs.unlinkSync(imgPath);
        });
      });
    } catch (e) {
      console.error(e);
      message.reply("❌ ইমেজ আপস্কেল করতে ব্যর্থ। আবার চেষ্টা করুন।");
    }
  }
};
