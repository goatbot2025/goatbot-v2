module.exports = {
  config: {
    name: "spamkick",
    version: "1.0",
    author: "Newton",
    description: "Kick users sending repeated messages",
    usage: "",
    cooldown: 5
  },
  run: async function({ message, event, api }) {
    return message.reply("🚫 Spam kick functionality is not implemented yet.");
  }
};
