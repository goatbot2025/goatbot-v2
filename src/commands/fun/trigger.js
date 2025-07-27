module.exports = {
  config: {
    name: "trigger",
    version: "1.0",
    author: "Newton",
    description: "Send a triggered meme (placeholder)",
    usage: "[mention/reply]",
    cooldown: 5,
  },
  run: async function ({ message, event }) {
    const uid = event.messageReply?.senderID || Object.keys(event.mentions)[0];
    if (!uid) return message.reply("Tag someone to TRIGGER! 😤");
    message.reply("🔴 Triggered! 😡 (Feature to be added)");
  },
};
