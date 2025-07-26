module.exports = {
  config: {
    name: "autosetname",
    version: "1.0",
    author: "Newton",
    role: 1,
    shortDescription: "✏️ Set bot nickname in group",
    longDescription: "Automatically sets the bot's nickname in the group",
    category: "boxchat",
    guide: "{pn} [name]"
  },

  onStart: async function ({ api, event, args }) {
    const name = args.join(" ");
    if (!name) return api.sendMessage("ℹ️ Provide a nickname.", event.threadID);

    try {
      await api.changeNickname(name, event.threadID, api.getCurrentUserID());
      api.sendMessage(`✅ Nickname set to: ${name}`, event.threadID);
    } catch (e) {
      api.sendMessage("❌ Failed to set nickname.", event.threadID);
    }
  }
};

