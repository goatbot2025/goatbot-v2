module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Bot information",
    longDescription: "Displays basic bot and owner information",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    message.reply(`🤖 Bot Info:
• Owner: Newton
• UID: 100095322679638
• Bot Nick: music-lover (newton)
• Bot UID: 61577598163835
• Prefix: *

🔗 Owner FB: https://www.facebook.com/newton.biswas.504758
🔗 Bot FB: https://www.facebook.com/profile.php?id=61577598163835`);
  }
};
