module.exports = {
  config: {
    name: "actor",
    version: "1.0",
    author: "Newton",
    description: "Random actor name game",
    usage: "",
    cooldown: 3,
  },
  run: async function ({ message }) {
    const actors = ["Shahrukh Khan", "Tom Cruise", "Leonardo DiCaprio", "Salman Khan", "Hrithik Roshan"];
    const pick = actors[Math.floor(Math.random() * actors.length)];
    message.reply(`🎬 Your random actor is: ${pick}`);
  },
};
