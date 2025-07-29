module.exports = {
  config: {
    name: "dog",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Random dog image",
    longDescription: "Send a random dog image",
    category: "fun",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    const res = await global.utils.getStreamFromURL("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    const imgURL = data.message;
    return message.send({
      body: "🐶 Here's a cute dog for you!",
      attachment: await global.utils.getStreamFromURL(imgURL)
    });
  }
};
