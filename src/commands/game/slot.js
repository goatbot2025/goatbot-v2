module.exports = {
  config: {
    name: "slot",
    version: "1.0",
    author: "Newton",
    description: "Slot machine game",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    const items = ["🍒", "🍋", "🍊", "🍉", "⭐", "7️⃣"];
    const result = [0, 0, 0].map(() => items[Math.floor(Math.random() * items.length)]);
    const win = result[0] === result[1] && result[1] === result[2];
    message.reply(`🎰 ${result.join(" | ")}\n${win ? "🎉 You win!" : "😢 Try again!"}`);
  },
};
