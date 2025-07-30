module.exports = {
  config: {
    name: "unfriend",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Unfriend a user",
    longDescription: "Unfriend a user by their UID or by mentioning them",
    category: "owner",
    guide: "{pn} @mention or {pn} <uid>"
  },

  onStart: async function ({ args, event, message, api }) {
    let uid = args[0];

    if (event.mentions && Object.keys(event.mentions).length > 0) {
      uid = Object.keys(event.mentions)[0];
    }

    if (!uid) return message.reply("❌ Provide a UID or mention someone.");

    try {
      await api.removeUserFromFriendList(uid);
      message.reply(`✅ Unfriended user with UID: ${uid}`);
    } catch (e) {
      message.reply("❌ Failed to unfriend user.");
    }
  }
};
