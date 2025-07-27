module.exports = {
  config: {
    name: "say",
    version: "1.0",
    author: "Newton",
    description: "Repeat your message",
    usage: "[text]",
    cooldown: 3,
  },
  run: async function ({ message, args }) {
    if (!args[0]) return message.reply("Say what? 🤔");
    message.reply(args.join(" "));
  },
};
