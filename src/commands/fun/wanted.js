module.exports = {
  config: {
    name: "wanted",
    version: "1.0",
    author: "Newton",
    description: "Generate a wanted poster (placeholder)",
    usage: "[mention/reply]",
    cooldown: 5,
  },
  run: async function ({ message, event }) {
    const uid = event.messageReply?.senderID || Object.keys(event.mentions)[0];
    if (!uid) return message.reply("Tag someone to WANTED! 🧾");
    message.reply("📜 Wanted Poster Coming Soon!");
  },
};
