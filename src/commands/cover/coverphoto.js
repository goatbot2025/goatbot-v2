module.exports = {
  config: {
    name: "coverphoto",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Send a cover photo",
    longDescription: "Sends a sample or random cover photo",
    category: "cover",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    // Placeholder image URL
    const imageUrl = "https://files.catbox.moe/072wxr.png";
    message.reply({
      body: "Here's your cover photo 📷",
      attachment: await global.utils.getStreamFromURL(imageUrl)
    });
  }
};
