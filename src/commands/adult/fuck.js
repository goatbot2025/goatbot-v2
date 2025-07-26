module.exports = {
  config: {
    name: "fuck",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Random adult video",
    longDescription: "Sends a random adult fuck video (VIP only)",
    category: "adult",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message, event, usersData }) {
    const vip = await usersData.get(event.senderID, "data.vip") || false;
    if (!vip) return message.reply("🚫 You are not a VIP user!");

    const videos = [
      "https://files.catbox.moe/7kp9ae.mp4",
      "https://files.catbox.moe/hjx5u7.mp4",
      "https://files.catbox.moe/a3r8z2.mp4",
      "https://files.catbox.moe/jr9oqn.mp4",
      "https://files.catbox.moe/t49blf.mp4",
      "https://files.catbox.moe/k40yw9.mp4",
      "https://files.catbox.moe/anpnph.mp4"
    ];

    const random = videos[Math.floor(Math.random() * videos.length)];
    message.reply({ body: "🔥 Enjoy!", attachment: await global.utils.getStreamFromURL(random) });
  }
};
