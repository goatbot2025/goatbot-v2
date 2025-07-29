module.exports = {
  config: {
    name: "trigger",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Triggered effect",
    longDescription: "Add a triggered effect to user's avatar",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0] || event.senderID;
    const url = `https://some-random-api.com/canvas/triggered?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `🔥 Triggered!`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
