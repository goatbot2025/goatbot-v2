module.exports = {
  config: {
    name: "balance",
    aliases: ["bal", "money"],
    version: "1.0",
    author: "newton",
    countDown: 2,
    role: 0,
    shortDescription: "Check your balance",
    longDescription: "Shows the user's wallet and bank balance",
    category: "economy",
    guide: "{pn}"
  },

  onStart: async function ({ event, message, usersData }) {
    const data = await usersData.get(event.senderID);
    const money = data.money || 0;
    const bank = data.bank || 0;
    message.reply(
      `💸 Wallet: $${money.toLocaleString()}\n🏦 Bank: $${bank.toLocaleString()}`
    );
  }
};
