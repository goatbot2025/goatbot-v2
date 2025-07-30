module.exports = {
  config: {
    name: "profile",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Get user profile picture",
    longDescription: "Get the profile picture of the user or mentioned user",
    category: "media",
    guide: "{pn} or {pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const uid = Object.keys(event.mentions)[0] || event.senderID;
    const url = `https://graph.facebook.com/${uid}/picture?width=1024&height=1024`;
    message.send({
      body: "🖼️ Here is the profile picture:",
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
