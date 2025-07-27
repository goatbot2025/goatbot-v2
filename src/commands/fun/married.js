module.exports = {
  config: {
    name: "married",
    version: "1.0",
    author: "Newton",
    description: "Fake marriage proposal",
    usage: "[mention/reply]",
    cooldown: 5,
  },
  run: async function ({ message, event, Users }) {
    const uid = event.messageReply?.senderID || Object.keys(event.mentions)[0];
    if (!uid) return message.reply("Mention someone to propose 💍");
    const name = await Users.getName(uid);
    message.reply(`💍 You are now officially married to ${name}! 🎉`);
  },
};
