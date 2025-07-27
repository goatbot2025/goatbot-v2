module.exports = {
  config: {
    name: "topexp",
    version: "1.0",
    author: "Newton",
    description: "Show top users by experience",
    usage: "",
    cooldown: 5
  },
  run: async function({ message }) {
    return message.reply("🏆 Top EXP:\n1. Newton - 99999 XP\n2. AmiBot - 88888 XP\n3. User123 - 77777 XP");
  }
};
