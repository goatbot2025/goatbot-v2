module.exports = {
  config: {
    name: "trash",
    version: "1.0",
    author: "Newton",
    description: "Send trash message",
    usage: "[mention/reply]",
    cooldown: 3,
  },
  run: async function ({ message, event, Users }) {
    const uid = event.messageReply?.senderID || Object.keys(event.mentions)[0];
    if (!uid) return message.reply("Mention someone to trash 🗑️");
    const name = await Users.getName(uid);
    message.reply(`🗑️ ${name} has been thrown into the trash can! 😂`);
  },
};
