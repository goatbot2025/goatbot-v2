module.exports = {
  config: {
    name: "hack",
    version: "1.0",
    author: "newton",
    countDown: 7,
    role: 0,
    shortDescription: "Hack someone 🤖",
    longDescription: "Pretend to hack mentioned user with fake details",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Mention someone to hack 👨‍💻");
    const name = event.mentions[mention];
    const url = `https://some-random-api.com/canvas/hacked?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    return message.send({
      body: `💻 Hacking ${name.replace("@", "")}...`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
