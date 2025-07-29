module.exports = {
  config: {
    name: "slap",
    version: "1.0",
    author: "newton",
    countDown: 4,
    role: 0,
    shortDescription: "Slap someone",
    longDescription: "Slap a user with anime slap gif",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Tag someone to slap 👋");
    const res = await global.utils.getStreamFromURL("https://nekos.life/api/v2/img/slap");
    const data = await res.json();
    return message.send({
      body: `👋 ${event.senderID} slapped ${mention}!`,
      attachment: await global.utils.getStreamFromURL(data.url)
    });
  }
};
