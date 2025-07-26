module.exports = {
  config: {
    name: "admin",
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 1,
    shortDescription: "🔧 Show group admins",
    longDescription: "Displays a list of admins in the current group chat",
    category: "boxchat",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    try {
      const threadInfo = await api.getThreadInfo(event.threadID);
      const adminIDs = threadInfo.adminIDs.map(item => item.id);
      const users = await Promise.all(adminIDs.map(id => api.getUserInfo(id)));

      const adminList = adminIDs.map(id => `• ${users[id].name} (${id})`).join("\n");
      api.sendMessage(`👑 Group Admins:\n\n${adminList}`, event.threadID);
    } catch (e) {
      api.sendMessage("❌ Couldn't fetch admin list.", event.threadID);
    }
  }
};

