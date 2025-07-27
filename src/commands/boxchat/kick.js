module.exports = {
  config: {
    name: "kick",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 3,
    role: 1,
    shortDescription: "Remove user from group",
    longDescription: "Kick a mentioned user or reply target from the group chat",
    category: "boxchat",
    guide: { en: "{pn} @tag or reply" }
  },

  onStart: async function ({ api, event, usersData }) {
    let uid;
    if (event.type === "message_reply") {
      uid = event.messageReply.senderID;
    } else if (event.mentions) {
      uid = Object.keys(event.mentions)[0];
    }

    if (!uid) return api.sendMessage("⚠️ Mention someone or reply to their message.", event.threadID);

    const name = await usersData.getName(uid);
    api.removeUserFromGroup(uid, event.threadID, err => {
      if (err) return api.sendMessage("❌ Failed to kick.", event.threadID);
      api.sendMessage(`✅ Removed ${name} from group.`, event.threadID);
    });
  }
};
