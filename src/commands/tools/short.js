const axios = require("axios");

module.exports = {
  config: {
    name: "short",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Shorten URL",
    longDescription: "Shorten a long URL using is.gd",
    category: "tools",
    guide: "{pn} <long url>"
  },

  onStart: async function ({ args, message }) {
    const url = args[0];
    if (!url) return message.reply("🔗 দয়া করে একটি URL দিন।\nউদাহরণ: *short https://example.com");

    try {
      const res = await axios.get(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`);
      message.reply(`🔗 সংক্ষিপ্ত লিঙ্ক:\n${res.data}`);
    } catch (e) {
      console.error(e);
      message.reply("❌ সংক্ষিপ্ত লিঙ্ক তৈরি করতে সমস্যা হয়েছে।");
    }
  }
};
