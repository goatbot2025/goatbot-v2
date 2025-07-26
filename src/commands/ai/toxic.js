module.exports = {
  config: {
    name: "toxic",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Toxic AI mode",
    longDescription: "Reply with toxic or sarcastic tone",
    category: "ai",
    guide: {
      en: "{pn} [text]"
    }
  },

  onStart: async function ({ api, event, args }) {
    const msg = args.join(" ");
    if (!msg) return api.sendMessage("☠️ Enter something for toxic AI to respond.", event.threadID);
    api.sendMessage("🤬 [Toxic AI mode placeholder]", event.threadID);
  }
};
