const axios = require("axios");

module.exports = {
  config: {
    name: "emojimean",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "🔍 ইমোজির মানে খুঁজুন",
    longDescription: "যে কোনো ইমোজির ব্যাখ্যা বা মানে জানুন",
    category: "wiki",
    guide: "{pn} 😍"
  },

  onStart: async function ({ args, message }) {
    const emoji = args[0];
    if (!emoji) return message.reply("🔍 দয়া করে একটি ইমোজি দিন। উদাহরণ: *emojimean 😎");

    try {
      const res = await axios.get(`https://api.erdwpe.com/emojimeaning?emoji=${encodeURIComponent(emoji)}`);
      const data = res.data.result;
      if (!data) return message.reply("❌ এই ইমোজির মানে খুঁজে পাওয়া যায়নি।");

      message.reply(`🔎 ইমোজি: ${emoji}\n📖 মানে: ${data}`);
    } catch (e) {
      console.error(e);
      message.reply("❌ ইমোজির মানে আনতে সমস্যা হয়েছে।");
    }
  }
};
