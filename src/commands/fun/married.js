module.exports = {
  config: {
    name: "married",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Marriage meme",
    longDescription: "Creates a wedding image with mentioned user",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Mention someone to marry 💍");
    const url = `https://some-random-api.com/canvas/married?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `💍 You just got married to ${event.mentions[mention].replace("@", "")}!`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
