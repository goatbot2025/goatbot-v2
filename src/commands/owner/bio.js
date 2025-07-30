module.exports = {
  config: {
    name: "bio",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Set or update bot's bio",
    longDescription: "Change the bio information of the bot account",
    category: "owner",
    guide: "{pn} [new bio text]"
  },
  onStart: async function ({ args, message, api }) {
    const bioText = args.join(" ");
    if (!bioText) return message.reply("❌ Please provide the bio text.");

    try {
      await api.changeBio(bioText);
      message.reply(`✅ Bio updated to:\n"${bioText}"`);
    } catch (err) {
      message.reply("⚠️ Failed to update bio.");
    }
  }
};
