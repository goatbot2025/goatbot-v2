module.exports = {
  config: {
    name: "sicbo",
    version: "1.0",
    author: "Newton",
    description: "Dice roll game",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    const roll = Math.floor(Math.random() * 6) + 1;
    message.reply(`🎲 You rolled a ${roll}`);
  },
};
