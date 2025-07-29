module.exports = {
  config: {
    name: "wishcard",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Wish card",
    longDescription: "Send birthday wish card",
    category: "fun",
    guide: "{pn} [name]"
  },
  onStart: async function ({ args, message }) {
    const name = args.join(" ") || "Friend";
    const url = `https://some-random-api.com/canvas/welcome?username=${encodeURIComponent(name)}&avatar=https://graph.facebook.com/me/picture?width=512&height=512`;
    message.send({
      body: `🎉 Happy Birthday ${name}!`,
      attachment: await global.utils.getStreamFromURL(url)
    });
  }
};
