module.exports = {
  config: {
    name: "fight",
    version: "1.0",
    author: "Newton",
    description: "Fight with another user",
    usage: "[tag/reply]",
    cooldown: 5,
  },
  run: async function ({ message, event }) {
    const uid = event.messageReply?.senderID || Object.keys(event.mentions)[0];
    if (!uid) return message.reply("Tag someone to fight! 🥊");
    message.reply("🥊 Fight started! (Coming soon)");
  },
};
