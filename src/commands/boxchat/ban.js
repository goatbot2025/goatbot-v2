module.exports = {
  config: {
    name: "ban",
    version: "1.0",
    author: "Newton",
    role: 2,
    shortDescription: "⛔ Ban user",
    longDescription: "Ban a user from using the bot",
    category: "boxchat",
    guide: "{pn} [@mention]"
  },

  onStart: async function ({ api, event }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage("🛑 Mention someone to ban.", event.threadID);

    global.bannedUsers = global.bannedUsers || new Set();
    global.bannedUsers.add(mention);

    return api.sendMessage(`⛔ User ${mention} has been banned.`, event.threadID);
  }
};

