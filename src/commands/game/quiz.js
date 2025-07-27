module.exports = {
  config: {
    name: "quiz",
    version: "1.0",
    author: "Newton",
    description: "Simple quiz game",
    usage: "",
    cooldown: 10,
  },
  run: async function ({ message }) {
    const quiz = [
      { q: "What is the capital of France?", a: "Paris" },
      { q: "2 + 2 = ?", a: "4" },
      { q: "Which planet is known as the Red Planet?", a: "Mars" },
    ];
    const q = quiz[Math.floor(Math.random() * quiz.length)];
    message.reply(`❓ ${q.q}\n(Answer: ${q.a})`);
  },
};
