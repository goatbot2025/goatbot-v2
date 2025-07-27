module.exports = {
  config: {
    name: "supportgc",
    version: "1.0",
    author: "Newton",
    description: "Get the support group link",
    usage: "",
    cooldown: 3
  },
  run: async function({ message }) {
    return message.reply("📌 Join our support group: https://facebook.com/groups/yourgroupid");
  }
};
