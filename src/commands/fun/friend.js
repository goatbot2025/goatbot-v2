module.exports = {
  config: {
    name: "friend",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Best friend meme",
    longDescription: "Show best friend meme between you and mentioned user",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Mention someone to call your best friend 👯‍♂️");
    const url = `https://some-random-api.com/canvas/friendship?avatar1=https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&avatar2=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: "👯‍♂️ Best friends forever!",
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
