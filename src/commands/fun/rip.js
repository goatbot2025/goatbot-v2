module.exports = {
  config: {
    name: "rip",
    version: "1.0",
    author: "Newton",
    description: "Rest in peace meme",
    usage: "[mention/reply]",
    cooldown: 5,
  },
  run: async function ({ message, event, Users }) {
    const uid = event.messageReply?.senderID || Object.keys(event.mentions)[0];
    if (!uid) return message.reply("Tag someone to RIP 👻");
    const name = await Users.getName(uid);
    message.reply(`🪦 R.I.P ${name}.\nGone but never forgotten. 😔`);
  },
};
