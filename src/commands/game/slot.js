module.exports = {
  config: {
    name: "slot",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Slot game",
    longDescription: "Play a slot machine game to win or lose coins",
    category: "game",
    guide: "{pn} <amount>"
  },

  onStart: async function ({ event, args, message, usersData }) {
    const bet = parseInt(args[0]);
    if (isNaN(bet) || bet <= 0)
      return message.reply("❌ Please enter a valid bet amount.");

    const data = await usersData.get(event.senderID);
    const money = data.money || 0;

    if (money < bet) return message.reply("❌ You don't have enough coins.");

    const items = ["🍒", "🍋", "🍉", "🍇", "🍓"];
    const spin = [
      items[Math.floor(Math.random() * items.length)],
      items[Math.floor(Math.random() * items.length)],
      items[Math.floor(Math.random() * items.length)]
    ];

    const result = spin.join(" | ");
    let reply = `🎰 ${result}\n`;

    if (spin[0] === spin[1] && spin[1] === spin[2]) {
      const jackpot = 80000000;
      await usersData.set(event.senderID, { money: money + jackpot });
      reply += `🎉 JACKPOT! You won $${jackpot.toLocaleString()}!`;
    } else if (spin.filter((v) => v === spin[0]).length >= 2) {
      const win = bet * 2;
      await usersData.set(event.senderID, { money: money + win });
      reply += `🎊 You won $${win.toLocaleString()}!`;
    } else {
      await usersData.set(event.senderID, { money: money - bet });
      reply += `😢 You lost $${bet.toLocaleString()}`;
    }

    message.reply(reply);
  }
};
