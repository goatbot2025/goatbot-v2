module.exports = {
  config: {
    name: "fbshare",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "Share a Facebook link",
    longDescription: "Share a Facebook post or profile link",
    category: "social",
    guide: "{pn} facebook_link"
  },
  onStart: async function ({ args, message }) {
    const link = args[0];
    if (!link || !link.includes("facebook.com")) {
      return message.reply("❌ একটি সঠিক Facebook লিংক দাও।");
    }

    message.send(`🔗 এই লিংকটি শেয়ার করা হয়েছে:\n${link}`);
  }
};
