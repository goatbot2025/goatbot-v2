module.exports = {
  config: {
    name: "kiss",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Kiss someone",
    longDescription: "Send a kiss gif to someone",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Please mention someone to kiss 😘");
    const gifURL = "https://nekos.life/api/v2/img/kiss";
    const res = await global.utils.getStreamFromURL(gifURL);
    const data = await res.json();
    return message.send({
      body: `💋 ${event.senderID} kissed ${mention}!`,
      attachment: await global.utils.getStreamFromURL(data.url)
    });
  }
};
