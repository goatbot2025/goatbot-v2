module.exports = {
  config: {
    name: "daily",
    version: "1.0",
    author: "Newton",
    description: "Collect daily reward",
    usage: "",
    cooldown: 86400,
  },
  run: async function ({ message }) {
    message.reply("🎁 You've collected your daily reward! (Add coins later)");
  },
};
