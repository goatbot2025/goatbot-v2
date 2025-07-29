module.exports = {
  config: {
    name: "motivation",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Motivational quote",
    longDescription: "Send a motivational image",
    category: "fun",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    const url = "https://some-random-api.com/canvas/misc/motivation";
    message.send({
      body: "💪 Stay motivated!",
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
