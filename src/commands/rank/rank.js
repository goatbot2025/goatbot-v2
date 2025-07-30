module.exports = {
  config: {
    name: "rank",
    version: "1.0",
    author: "newton",
    role: 0,
    shortDescription: "Check your rank",
    longDescription: "Check your rank in the group based on experience points",
    category: "rank",
    guide: "{pn}"
  },

  onStart: async function ({ event, usersData, threadsData, message }) {
    const userID = event.senderID;
    const userData = await usersData.get(userID);
    const exp = userData.exp || 0;

    const threadID = event.threadID;
    const allMembers = await threadsData.get(threadID, "members") || {};

    const allUserIDs = Object.keys(allMembers);
    const usersWithExp = await Promise.all(
      allUserIDs.map(async (uid) => {
        const uData = await usersData.get(uid);
        return { uid, exp: uData.exp || 0 };
      })
    );

    usersWithExp.sort((a, b) => b.exp - a.exp);
    const rank = usersWithExp.findIndex(u => u.uid == userID) + 1;

    message.reply(`📊 Your Rank: #${rank}
🔢 Total EXP: ${exp}`);
  }
};
