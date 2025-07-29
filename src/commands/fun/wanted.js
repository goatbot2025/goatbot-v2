module.exports = {
  config: {
    name: "wanted",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Wanted poster",
    longDescription: "Creates a wanted poster of user",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0] || event.senderID;
    const url = `https://some-random-api.com/canvas/wanted?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `🔫 WANTED!`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
