const axios = require("axios");

module.exports = {
  config: {
    name: "numinfo",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Number information",
    longDescription: "Get information about a number",
    category: "info",
    guide: "{pn} <number>"
  },

  onStart: async function ({ message, args }) {
    const number = args[0];
    if (!number) return message.send("🔢 কোনো সংখ্যা দাও!");

    try {
      const res = await axios.get(`http://numbersapi.com/${number}`);
      message.send(`ℹ️ ${res.data}`);
    } catch {
      message.send("❌ তথ্য খুঁজে পাওয়া যায়নি।");
    }
  }
};
