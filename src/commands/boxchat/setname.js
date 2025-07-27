module.exports = {
  config: {
    name: "setname",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 3,
    role: 1,
    shortDescription: "Set group name",
    longDescription: "Change the name of the group chat",
    category: "boxchat",
    guide: { en: "{pn} new name" }
  },

  onStart: async function ({ api, event, args }) {
    const name = args.join(" ");
    if (!name) return api.sendMessage("❗Please provide a new group name.", event.threadID);
    api.setTitle(name, event.threadID, err => {
      if (err) return api.sendMessage("❌ Couldn't change name.", event.threadID);
      api.sendMessage(`✅ Group name changed to: ${name}`, event.threadID);
    });
  }
};
