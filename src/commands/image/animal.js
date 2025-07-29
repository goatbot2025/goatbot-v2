const axios = require("axios");

module.exports = {
  config: {
    name: "animal",
    aliases: ["fox", "dog", "cat"],
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Send random animal images",
    longDescription: "Send random pictures of foxes, dogs, or cats based on alias",
    category: "image",
    guide: "{pn} [fox|dog|cat]"
  },

  onStart: async function ({ message, args, commandName }) {
    let url;
    switch (commandName) {
      case "fox":
        url = "https://randomfox.ca/floof/";
        break;
      case "dog":
        url = "https://dog.ceo/api/breeds/image/random";
        break;
      case "cat":
        url = "https://api.thecatapi.com/v1/images/search";
        break;
      default:
        return message.reply("⚠️ Use: fox | dog | cat");
    }

    try {
      const res = await axios.get(url);
      let imageUrl;

      if (commandName === "fox") {
        imageUrl = res.data.image;
      } else if (commandName === "dog") {
        imageUrl = res.data.message;
      } else {
        imageUrl = res.data[0].url;
      }

      return message.send({
        body: `Here's a cute ${commandName} 🐾`,
        attachment: await global.utils.getStreamFromURL(imageUrl)
      });
    } catch (e) {
      return message.reply("❌ Failed to fetch image.");
    }
  }
};
