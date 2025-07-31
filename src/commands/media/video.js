const axios = require("axios");

module.exports = {
  config: {
    name: "video",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "Random short video",
    longDescription: "Send a random short video from catbox or API",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const videos = [
      "https://files.catbox.moe/h65cs5.mp4",
      "https://files.catbox.moe/izkgmh.mp4",
      "https://files.catbox.moe/0d9w6o.mp4",
      "https://files.catbox.moe/j1dbbp.mp4",
      "https://files.catbox.moe/jwj9q3.mp4",
      "https://files.catbox.moe/tfnsdj.mp4",
      "https://files.catbox.moe/3yihp3.mp4"
    ];

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    message.reply({
      body: "🎬 Here's a random video for you!",
      attachment: await global.utils.getStreamFromURL(randomVideo)
    });
  }
};
