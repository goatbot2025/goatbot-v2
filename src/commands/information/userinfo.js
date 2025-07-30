module.exports = {
  config: {
    name: "userinfo",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "User info",
    longDescription: "Shows basic user profile info",
    category: "information",
    guide: "{pn} <@mention or leave blank>"
  },

  onStart: async function ({ event, usersData, message }) {
    const id = Object.keys(event.mentions)[0] || event.senderID;
    const user = await usersData.get(id);
    const name = user.name || "Unknown";
    const gender = user.gender || "Unknown";
    const money = user.money || 0;

    message.send(`🧑‍💼 নাম: ${name}\n⚧️ লিঙ্গ: ${gender}\n💰 ব্যালেন্স: ${money}`);
  }
};
