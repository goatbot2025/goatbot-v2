module.exports = {
  config: {
    name: "wordgame",
    version: "1.0",
    author: "Newton",
    description: "Simple word scramble game",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    const words = ["elephant", "banana", "computer", "butterfly", "rainbow"];
    const pick = words[Math.floor(Math.random() * words.length)];
    const scrambled = pick.split('').sort(() => 0.5 - Math.random()).join('');
    message.reply(`🔤 Unscramble this: ${scrambled}\n(Answer: ${pick})`);
  },
};
