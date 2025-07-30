module.exports = {
  config: {
    name: "rankup",
    version: "1.0",
    author: "newton",
    role: 0,
    shortDescription: "Rank up notification",
    longDescription: "Shows when you rank up with EXP",
    category: "rank",
    guide: "{pn}"
  },

  onStart: async function ({ event, usersData, message }) {
    const uid = event.senderID;
    const userData = await usersData.get(uid);
    const exp = userData.exp || 0;
    const currentLevel = Math.floor(exp / 1000);

    message.reply(`🎉 Congrats ${userData.name || "User"}!
🔺 You are now Level ${currentLevel}`);
  }
};
