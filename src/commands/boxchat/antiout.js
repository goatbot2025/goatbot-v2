module.exports = {
  config: {
    name: "antiout",
    version: "1.0",
    author: "Newton",
    role: 1,
    shortDescription: "🚫 Prevent users from leaving the group",
    longDescription: "Enables or disables anti-leave feature for this group",
    category: "boxchat",
    guide: "{pn} on/off"
  },

  onStart: async function ({ args, api, event }) {
    const mode = args[0];
    if (!mode || !["on", "off"].includes(mode)) {
      return api.sendMessage("🛑 Use: antiout on/off", event.threadID);
    }

    global.moduleData = global.moduleData || {};
    global.moduleData.antiout = global.moduleData.antiout || {};
    global.moduleData.antiout[event.threadID] = mode === "on";

    return api.sendMessage(`✅ Antiout ${mode === "on" ? "enabled" : "disabled"}.`, event.threadID);
  }
};

