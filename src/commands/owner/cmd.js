module.exports = {
  config: {
    name: "cmd",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Command management",
    longDescription: "Enable or disable specific commands",
    category: "owner",
    guide: "{pn} enable/disable [commandName]"
  },
  onStart: async function ({ args, message }) {
    const action = args[0];
    const cmdName = args[1];
    if (!["enable", "disable"].includes(action) || !cmdName) {
      return message.reply("❌ Usage: enable/disable [command]");
    }

    // This is a placeholder. You can implement real config storage if needed.
    message.reply(`✅ Command "${cmdName}" has been ${action}d (simulation).`);
  }
};
