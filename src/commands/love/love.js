module.exports = {
  config: {
    name: "love",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "love percentage",
    longDescription: "Check love percentage between two people",
    category: "love",
    guide: "{pn} @mention"
  },

  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.send("❤️ কাউকে mention কর");

    const love = Math.floor(Math.random() * 100) + 1;
    message.send(`💕 তোমার সাথে ${event.mentions[mention].replace("@", "")}-এর ভালোবাসা হচ্ছে ${love}% ❤️`);
  }
};
