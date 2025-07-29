module.exports = {
  config: {
    name: "toilet",
    version: "1.0",
    author: "newton",
    countDown: 6,
    role: 0,
    shortDescription: "Put someone on toilet meme",
    longDescription: "Send someone to toilet meme",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Tag someone to send to the toilet 🚽");
    const url = `https://some-random-api.com/canvas/toilet?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `${mention.replace("@", "")} is now using the toilet 🚽`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
