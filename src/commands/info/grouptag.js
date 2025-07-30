module.exports = {
  config: {
    name: "grouptag",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 1,
    shortDescription: "Tag all members",
    longDescription: "Mentions all group members in one message",
    category: "info",
    guide: "{pn} [custom message]"
  },

  onStart: async function ({ api, event, args }) {
    const threadInfo = await api.getThreadInfo(event.threadID);
    const mentions = [];
    const message = args.join(" ") || "Hey everyone!";

    for (let user of threadInfo.participantIDs) {
      if (user !== api.getCurrentUserID()) {
        mentions.push({ tag: "@" + user, id: user });
      }
    }

    api.sendMessage({
      body: message,
      mentions
    }, event.threadID);
  }
};
