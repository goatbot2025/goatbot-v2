module.exports = {
  config: {
    name: "refresh",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 3,
    role: 1,
    shortDescription: "Refresh bot",
    longDescription: "Restart or reload the bot's memory",
    category: "boxchat",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message }) {
    message.reply("🔄 Bot is refreshing...");
    process.exit(1);
  }
};
