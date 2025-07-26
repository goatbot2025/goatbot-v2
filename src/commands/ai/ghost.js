module.exports = {
  config: {
    name: "ghost",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Ghost text",
    longDescription: "Send ghost (invisible) message",
    category: "ai",
    guide: {
      en: "{pn} [message]"
    }
  },

  onStart: async function ({ api, event, args }) {
    const msg = args.join(" ");
    if (!msg) return api.sendMessage("👻 Please enter a message to ghost.", event.threadID);
    const ghost = msg.split("").join("\u200B");
    api.sendMessage(ghost, event.threadID);
  }
};
