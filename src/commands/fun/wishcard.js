module.exports = {
  config: {
    name: "wishcard",
    version: "1.0",
    author: "Newton",
    description: "Send a random wish card",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    const wishes = [
      "🎉 Wishing you all the best today and always!",
      "🎂 May your day be filled with joy and blessings!",
      "🌟 Shine bright like a diamond today!",
    ];
    const wish = wishes[Math.floor(Math.random() * wishes.length)];
    message.reply(wish);
  },
};
