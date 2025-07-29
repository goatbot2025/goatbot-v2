module.exports = {
  config: {
    name: "mistake",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "You were a mistake meme",
    longDescription: "Fake meme showing target as a mistake",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Mention someone you regret knowing 😬");
    const url = `https://some-random-api.com/canvas/mistake?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `${event.mentions[mention].replace("@", "")}, you were a mistake 😬`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
