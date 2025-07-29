module.exports = {
  config: {
    name: "arrest",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Make arrest meme",
    longDescription: "Send a photo showing user being arrested",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ args, message, event, usersData }) {
    const mention = Object.keys(event.mentions)[0] || event.senderID;
    const name = event.mentions[mention] || event.senderID;
    const url = `https://some-random-api.com/canvas/arrest?avatar=https://graph.facebook.com/${mention}/picture?width=512&height=512`;
    message.send({
      body: `🚔 ${name.replace("@", "")} just got arrested!`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
