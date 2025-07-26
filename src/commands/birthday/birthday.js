module.exports = {
  config: {
    name: "birthday",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "🎂 Wish birthday",
    longDescription: "Send a birthday wish to someone in the chat",
    category: "birthday",
    guide: {
      en: "{pn} [name or tag]"
    }
  },

  onStart: async function ({ api, event, args }) {
    const mention = Object.keys(event.mentions)[0];
    const name = mention ? event.mentions[mention].replace("@", "") : args.join(" ");

    if (!name) return api.sendMessage("🎉 কার জন্মদিন? নাম বা ট্যাগ দিন।", event.threadID, event.messageID);

    const message = `🎂 শুভ জন্মদিন, ${name}!\n\n🎉 আজকের দিনটা হোক আনন্দে ভরপুর, স্বপ্নে রঙিন, আর ভালোবাসায় ভরা! 💖\n\n— তোমার Newton bot 🎈`;

    return api.sendMessage(message, event.threadID);
  }
};
