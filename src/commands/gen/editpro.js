module.exports = {
  config: {
    name: "editpro",
    version: "1.0",
    author: "Newton",
    description: "Edit profile mock (text only)",
    usage: "[name]",
    cooldown: 5
  },
  run: async function({ message, args }) {
    const name = args.join(" ");
    if (!name) return message.reply("❗ Provide a name to update.");
    message.reply(`✅ Profile updated to: ${name}`);
  }
};
