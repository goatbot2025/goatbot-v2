const axios = require("axios");
module.exports = {
  config: {
    name: "imgur",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Upload image to Imgur",
    longDescription: "Upload an image from URL or reply to an image message and get Imgur link",
    category: "media",
    guide: "{pn} <imageURL> or reply to an image"
  },
  onStart: async function ({ message, event, args }) {
    const IMGUR_CLIENT_ID = "YOUR_IMGUR_CLIENT_ID"; // Replace with actual key
    let imageURL = args[0];
    if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
      imageURL = event.messageReply.attachments[0].url;
    }
    if (!imageURL) return message.reply("Please reply to an image or provide a direct image URL.");
    try {
      const res = await axios.post("https://api.imgur.com/3/image", {
        image: imageURL,
        type: "URL"
      }, {
        headers: { Authorization: `Client-ID ${IMGUR_CLIENT_ID}` }
      });
      message.reply(`✅ Uploaded to Imgur:\n${res.data.data.link}`);
    } catch (e) {
      message.reply("❌ Failed to upload. Invalid URL or API error.");
    }
  }
};
