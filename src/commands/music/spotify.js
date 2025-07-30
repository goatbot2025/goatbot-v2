// module.exports for spotify downloader
const axios = require("axios");

module.exports = {
  config: {
    name: "spotify",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "Download song from Spotify",
    longDescription: "Download music by Spotify link",
    category: "music",
    guide: "{pn} [spotify track URL]"
  },

  onStart: async function ({ message, args }) {
    if (!args[0]?.includes("spotify.com")) {
      return message.reply("🎵 দয়া করে একটি বৈধ Spotify লিংক দিন!");
    }

    const apiKey = "rCyFNQ4lysqyc7vK38yH4pQ3d8glR5P28bSHFqYCHKkYX5BbyV5V6Hed";
    const url = `https://spotify-downloader-api1.p.rapidapi.com/spotify?url=${encodeURIComponent(args[0])}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "spotify-downloader-api1.p.rapidapi.com"
        }
      });

      const data = response.data;
      const msg = `🎶 Title: ${data.title}\n👤 Artist: ${data.artist}\n📀 Album: ${data.album}`;
      message.send({
        body: msg,
        attachment: await global.utils.getStreamFromURL(data.link)
      });

    } catch (e) {
      message.reply("❌ গান ডাউনলোড করা যায়নি!");
    }
  }
};
