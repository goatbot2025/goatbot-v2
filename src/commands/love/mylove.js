module.exports = {
  config: {
    name: "mylove",
    version: "1.0",
    author: "newton",
    countDown: 1,
    role: 0,
    shortDescription: "your love",
    longDescription: "Shows who loves you the most",
    category: "love",
    guide: "{pn}"
  },

  onStart: async function ({ event, usersData, message }) {
    const users = await usersData.getAll();
    const pick = users[Math.floor(Math.random() * users.length)];
    message.send(`💖 তোমাকে সবচেয়ে বেশি ভালোবাসে: ${pick.name}`);
  }
};
