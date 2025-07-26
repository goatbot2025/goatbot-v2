module.exports = {
  config: {
    name: "sex",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Random sex video",
    longDescription: "Sends a random sex video (VIP only)",
    category: "adult",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message, event, usersData }) {
    const vip = await usersData.get(event.senderID, "data.vip") || false;
    if (!vip) return message.reply("🚫 You are not a VIP user!");

    const videos = [
      "https://files.catbox.moe/t4fjkc.mp4",
      "https://files.catbox.moe/nfj9n9.mp4",
      "https://files.catbox.moe/q0bu36.mp4",
      "https://files.catbox.moe/3w87nr.mp4",
      "https://files.catbox.moe/an23w0.mp4",
      "https://files.catbox.moe/2y4lpl.mp4",
      "https://files.catbox.moe/xthvwv.mp4"
    ];

    const random = videos[Math.floor(Math.random() * videos.length)];
    message.reply({ body: "🔞", attachment: await global.utils.getStreamFromURL(random) });
  }
};
