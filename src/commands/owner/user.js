module.exports = {
  config: {
    name: "user",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "User info",
    longDescription: "Show or update user data",
    category: "owner",
    guide: "{pn} <uid>"
  },

  onStart: async function ({ args, usersData, message }) {
    const uid = args[0];
    if (!uid) return message.reply("❌ Provide a UID.");

    const data = await usersData.get(uid);
    if (!data) return message.reply("❌ No user data found.");

    message.reply(`👤 User Info:
• Name: ${data.name}
• UID: ${uid}
• Exp: ${data.exp || 0}
• Money: ${data.money || 0}`);
  }
};
