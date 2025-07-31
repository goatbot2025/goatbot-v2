const fs = require("fs");
const path = require("path");
const axios = require("axios");

module.exports = {
  config: {
    name: "message",
    eventType: ["message"],
  },

  async run({ message, event, threadsData }) {
    const body = event.body?.toLowerCase();
    if (!body) return;

    // Prefix keyword detect
    if (body.includes("prefix")) {
      return message.reply({
        body: "🔥 Prefix info:",
        attachment: await getStreamFromURL("https://files.catbox.moe/etxmzw.png")
      });
    }

    // Newton keyword detect
    if (body.includes("newton")) {
      return message.reply({
        body: "🎬 Newton is here!",
        attachment: await getStreamFromURL("https://files.catbox.moe/m451ok.mp4")
      });
    }
  }
};

// Image/video stream fetcher
async function getStreamFromURL(url) {
  const res = await axios({
    method: "GET",
    url,
    responseType: "stream"
  });
  return res.data;
        }

