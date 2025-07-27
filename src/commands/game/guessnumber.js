module.exports = {
  config: {
    name: "guessnumber",
    version: "1.0",
    author: "Newton",
    description: "Guess a number between 1 and 10",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    const num = Math.floor(Math.random() * 10) + 1;
    message.reply(`🎲 I guessed: ${num}. Can you guess better?`);
  },
};
