module.exports = {
  config: {
    name: "carton",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Cartoonify profile",
    longDescription: "Convert mentioned user's profile picture into cartoon style",
    category: "fun",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0] || event.senderID;
    const url = `https://api.deepai.org/api/toonify`;
    const formData = {
      image: `https://graph.facebook.com/${mention}/picture?width=512&height=512`
    };
    const headers = { 'api-key': 'YOUR_DEEPAI_API_KEY' };
    const res = await global.utils.postStream(url, formData, headers);
    message.send({
      body: "Here’s your cartoon version!",
      attachment: await global.utils.getStreamFromURL(res.output_url)
    });
  }
};
