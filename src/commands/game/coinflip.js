module.exports = {
  config: {
    name: "coinflip",
    version: "1.0",
    author: "Newton",
    description: "Flip a coin",
    usage: "",
    cooldown: 3,
  },
  run: async function ({ message }) {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    message.reply(`🪙 You flipped: ${result}`);
  },
};
