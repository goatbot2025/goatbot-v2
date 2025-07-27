module.exports = {
  config: {
    name: "toilet",
    version: "1.0",
    author: "Newton",
    description: "Send a toilet meme",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    message.reply("🚽 Toilet break! Don’t forget the tissue. 🧻😂");
  },
};
