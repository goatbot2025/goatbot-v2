module.exports = {
  config: {
    name: "mistake",
    version: "1.0",
    author: "Newton",
    description: "Admit a mistake in a funny way",
    usage: "",
    cooldown: 5,
  },
  run: async function ({ message }) {
    message.reply("I admit... my biggest mistake was trusting you with my snacks. 🍪😭");
  },
};
