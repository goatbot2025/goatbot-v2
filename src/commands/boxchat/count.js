module.exports = {
  config: {
    name: "count",
    version: "1.0",
    author: "Newton",
    role: 0,
    shortDescription: "👥 Member count",
    longDescription: "Shows the number of members in the current group chat",
    category: "boxchat",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const threadInfo = await api.getThreadInfo(event.threadID);
    return api.sendMessage(`👥 This group has ${threadInfo.participantIDs.length} members.`, event.threadID);
  }
};

