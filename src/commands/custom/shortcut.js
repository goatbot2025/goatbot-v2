module.exports = {
  config: {
    name: "shortcut",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "custom",
    guide: {
      en: "{pn} - Shows shortcut command list"
    }
  },

  onStart: async function ({ api, event }) {
    const shortcuts = [
      "💬 *help - Show command list",
      "🔁 *restart - Restart the bot",
      "📢 *tagall - Tag everyone in group",
      "🎵 *spotify [song] - Search Spotify music",
      "🖼️ *img [text] - Generate image",
      "🤖 *chatgpt [question] - AI response"
    ];

    const message = "📋 Shortcut Commands:\n" + shortcuts.join("\n");
    return api.sendMessage(message, event.threadID);
  }
};
