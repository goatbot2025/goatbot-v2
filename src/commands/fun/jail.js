module.exports = {
  config: {
    name: "jail",
    version: "1.0",
    author: "Newton",
    description: "Send a jail image",
    usage: "[mention/reply]",
    cooldown: 5,
  },
  run: async function ({ message, event }) {
    message.reply("🔒 You're under arrest and going straight to jail! 🚔");
  },
};
