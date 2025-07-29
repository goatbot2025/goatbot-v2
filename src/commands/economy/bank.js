module.exports = {
  config: {
    name: "bank",
    version: "1.0",
    author: "newton",
    countDown: 2,
    role: 0,
    shortDescription: "Check bank balance",
    longDescription: "Check how much money you have in the bank",
    category: "economy",
    guide: "{pn}"
  },

  onStart: async function ({ event, message, usersData }) {
    const data = await usersData.get(event.senderID);
    const bank = data.bank || 0;
    message.reply(`🏦 Your bank balance is $${bank.toLocaleString()}`);
  }
};
