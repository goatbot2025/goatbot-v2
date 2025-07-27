module.exports = {
  config: {
    name: "onlyadminbox",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 1,
    shortDescription: "Toggle admin-only chat",
    longDescription: "Only allow admins to chat in the group",
    category: "boxchat",
    guide: { en: "{pn} on/off" }
  },

  onStart: async function ({ api, event, args }) {
    const mode = args[0];
    if (!["on", "off"].includes(mode)) return api.sendMessage("⚙️ Use: onlyadminbox on/off", event.threadID);

    global.data.onlyAdminBox = global.data.onlyAdminBox || {};
    global.data.onlyAdminBox[event.threadID] = mode === "on";

    return api.sendMessage(`🔒 Admin-only mode ${mode === "on" ? "enabled" : "disabled"}!`, event.threadID);
  }
};
