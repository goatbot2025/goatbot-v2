module.exports = {
  config: {
    name: "rip",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "RIP image",
    longDescription: "Send a fake RIP image of mentioned user",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0] || event.senderID;
    const url = `https://some-random-api.com/canvas/rip?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `🪦 RIP ${event.mentions[mention]?.replace("@", "") || "You"}`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
