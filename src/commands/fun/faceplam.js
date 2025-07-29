module.exports = {
  config: {
    name: "faceplam",
    version: "1.0",
    author: "newton",
    countDown: 2,
    role: 0,
    shortDescription: "Facepalm gif",
    longDescription: "Send a facepalm image",
    category: "fun",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    const res = await global.utils.getStreamFromURL("https://nekos.life/api/v2/img/facepalm");
    message.send({
      body: "🤦‍♂️ Facepalm...",
      attachment: res
    });
  }
};
