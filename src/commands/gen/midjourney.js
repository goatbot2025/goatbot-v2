module.exports = {
  config: {
    name: "midjourney",
    version: "1.0",
    author: "Newton",
    description: "Generate Midjourney-style prompt",
    usage: "[prompt]",
    cooldown: 10
  },
  run: async function({ message, args }) {
    const prompt = args.join(" ");
    if (!prompt) return message.reply("🎨 Provide a prompt for generation.");
    message.reply(`🧠 Midjourney prompt generated:\n"${prompt}, ultra-detailed, 4k, fantasy style"`);
  }
};
