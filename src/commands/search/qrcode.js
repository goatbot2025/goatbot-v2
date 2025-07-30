const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "qrcode",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Generate QR code",
    longDescription: "Generate a QR code from text",
    category: "search",
    guide: "{pn} your_text"
  },

  onStart: async function ({ args, message }) {
    const text = args.join(" ");
    if (!text) return message.reply("❌ দয়া করে QR কোডে রূপান্তরের জন্য কিছু লিখুন।");

    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
      const stream = await global.utils.getStreamFromURL(url);

      message.send({
        body: "✅ তোমার QR কোড তৈরি হয়েছে:",
        attachment: stream
      });
    } catch (e) {
      console.error(e);
      message.reply("❌ কিছুর ভুল হয়েছে QR কোড তৈরি করতে গিয়ে। পরে আবার চেষ্টা করুন।");
    }
  }
};

