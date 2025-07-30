module.exports = {
  config: {
    name: "tag",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Tag all group members",
    longDescription: "Mention all members in the group with optional message",
    category: "tag",
    guide: "{pn} [optional_message]"
  },
  onStart: async function ({ api, event, args }) {
    const threadID = event.threadID;
    const threadInfo = await api.getThreadInfo(threadID);
    const mentions = [];
    const message = args.join(" ") || "📢 Everyone attention please!";
    
    for (let user of threadInfo.participantIDs) {
      mentions.push({ tag: "@" + user, id: user });
    }

    api.sendMessage({ body: message, mentions }, threadID);
  }
};
