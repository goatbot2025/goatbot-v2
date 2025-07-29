module.exports = {
  config: {
    name: "jail",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Jail someone",
    longDescription: "Send someone to jail with a meme",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Mention someone to put in jail 🚔");
    const url = `https://some-random-api.com/canvas/jail?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `${mention.replace("@", "")} has been sent to jail!`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
