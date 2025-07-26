module.exports = {
  config: {
    name: "newton",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Talk to Newton",
    longDescription: "AI character based on Newton",
    category: "ai",
    guide: {
      en: "{pn} [your message]"
    }
  },

  onStart: async function ({ api, event, args }) {
    const input = args.join(" ");
    if (!input) return api.sendMessage("💬 Ask something to Newton AI.", event.threadID);
    api.sendMessage(`🧠 Newton is thinking...\n\n[Reply coming soon]`, event.threadID);
  }
};
