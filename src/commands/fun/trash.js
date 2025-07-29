module.exports = {
  config: {
    name: "trash",
    version: "1.0",
    author: "newton",
    countDown: 6,
    role: 0,
    shortDescription: "Send someone to trash",
    longDescription: "Send a user to the trash can meme",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Mention someone to send to the trash 🗑️");
    const url = `https://some-random-api.com/canvas/trash?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `${mention.replace("@", "")} has been sent to the trash 🗑️`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
