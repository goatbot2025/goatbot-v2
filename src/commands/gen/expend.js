module.exports = {
  config: {
    name: "expend",
    version: "1.0",
    author: "Newton",
    description: "Expand text with spaces",
    usage: "[text]",
    cooldown: 3
  },
  run: async function({ message, args }) {
    if (!args[0]) return message.reply("❗ Provide some text.");
    const expanded = args.join(" ").split("").join(" ");
    message.reply(`🔠 ${expanded}`);
  }
};
