module.exports = {
  config: {
    name: "hack",
    version: "1.0",
    author: "Newton",
    description: "Fake hack someone",
    usage: "[mention/reply]",
    cooldown: 5,
  },
  run: async function ({ message, event, Users }) {
    const targetID = event.messageReply?.senderID || event.mentions[0] || event.senderID;
    const name = await Users.getName(targetID);
    message.reply(`Hacking ${name}...\n🔍 Finding IP...\n💻 Injecting virus...\n✅ Done! 😂`);
  },
};
