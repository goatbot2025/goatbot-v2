module.exports = {
  config: {
    name: "pussy",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Random pussy image",
    longDescription: "Sends a random adult image (VIP only)",
    category: "adult",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message, event, usersData }) {
    const vip = await usersData.get(event.senderID, "data.vip") || false;
    if (!vip) return message.reply("🚫 You are not a VIP user!");

    const images = [
      "https://files.catbox.moe/ln5yi2.jpg",
      "https://files.catbox.moe/on1wav.jpg",
      "https://files.catbox.moe/s1woxs.jpg",
      "https://files.catbox.moe/kqpiru.jpg",
      "https://files.catbox.moe/m58hhv.jpg",
      "https://files.catbox.moe/1vmimc.jpg",
      "https://files.catbox.moe/eaoal8.jpg",
      "https://files.catbox.moe/ui7fsi.jpg",
      "https://files.catbox.moe/irnia9.jpeg"
    ];

    const random = images[Math.floor(Math.random() * images.length)];
    message.reply({ body: "🔥", attachment: await global.utils.getStreamFromURL(random) });
  }
};
