module.exports = {
  config: {
    name: "fbcover",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Generate a Facebook-style cover",
    longDescription: "Creates a Facebook cover using user-provided text or templates",
    category: "cover",
    guide: {
      en: "{pn} <text>"
    }
  },

  onStart: async function ({ args, message }) {
    const text = args.join(" ");
    if (!text) return message.reply("Please provide text for the cover.");

    message.reply(`🖼️ Generating Facebook cover with: ${text}`);
    // Placeholder logic
  }
};
