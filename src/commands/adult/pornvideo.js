module.exports = {
  config: {
    name: "pornvideo",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Random porn video",
    longDescription: "Sends a random porn video (VIP only)",
    category: "adult",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message, event, usersData }) {
    const vip = await usersData.get(event.senderID, "data.vip") || false;
    if (!vip) return message.reply("🚫 You are not a VIP user!");

    const videos = [
      "https://files.catbox.moe/7udzhr.mp4",
      "https://files.catbox.moe/wpopfd.mp4",
      "https://files.catbox.moe/g6dbro.mp4",
      "https://files.catbox.moe/7h9gc0.mp4",
      "https://files.catbox.moe/yj3gkt.mp4",
      "https://files.catbox.moe/a3r8z2.mp4",
      "https://files.catbox.moe/fvb3n4.mp4"
    ];

    const random = videos[Math.floor(Math.random() * videos.length)];
    message.reply({ body: "💦", attachment: await global.utils.getStreamFromURL(random) });
  }
};
