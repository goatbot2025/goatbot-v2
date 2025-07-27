module.exports = {
  config: {
    name: "motivation",
    version: "1.0",
    author: "Newton",
    description: "Send a motivational quote",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    const quotes = [
      "Believe in yourself and all that you are. 💪",
      "Push yourself, because no one else is going to do it for you. 🚀",
      "Don’t watch the clock; do what it does. Keep going. ⏰",
    ];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    message.reply(random);
  },
};
