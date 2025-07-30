const axios = require("axios");

module.exports = {
  config: {
    name: "history",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "Today in history",
    longDescription: "Get historical facts for today",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    try {
      const res = await axios.get("http://history.muffinlabs.com/date");
      const data = res.data.data.Events[0];
      message.send(`📅 ${data.year}: ${data.text}`);
    } catch (err) {
      message.send("❌ ইতিহাস আনতে সমস্যা হয়েছে।");
    }
  }
};
