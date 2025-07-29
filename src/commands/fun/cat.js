module.exports = {
  config: {
    name: "cat",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "Random cat image",
    longDescription: "Send a cute random cat image",
    category: "fun",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    const res = await global.utils.getStreamFromURL("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const imgURL = data[0].url;
    return message.send({
      body: "🐱 Here's a cute cat for you!",
      attachment: await global.utils.getStreamFromURL(imgURL)
    });
  }
};
