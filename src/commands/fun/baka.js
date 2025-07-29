module.exports = {
  config: {
    name: "baka",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Anime baka effect",
    longDescription: "Apply 'baka' effect to user avatar",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ args, message, event }) {
    const mention = Object.keys(event.mentions)[0] || event.senderID;
    const name = event.mentions[mention] || event.senderID;
    const url = `https://some-random-api.com/canvas/baka?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `😡 ${name.replace("@", "")} is such a BAKA!`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
