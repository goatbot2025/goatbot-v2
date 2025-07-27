module.exports = {
  config: {
    name: "friend",
    version: "1.0",
    author: "Newton",
    description: "Send a friendship message",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    message.reply("Friendship is the only cement that will ever hold the world together 🤝💖");
  },
};
