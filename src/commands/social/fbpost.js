module.exports = {
  config: {
    name: "fbpost",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 0,
    shortDescription: "Post something to your timeline",
    longDescription: "Make a text post to your own Facebook timeline",
    category: "social",
    guide: "{pn} your_text"
  },
  onStart: async function ({ api, args, message }) {
    const content = args.join(" ");
    if (!content) return message.reply("❌ তোমার পোস্টে লেখার কিছু দাও।");

    try {
      await api.sendMessage(content, message.senderID);
      message.reply("✅ তোমার পোস্ট পাঠানো হয়েছে (inbox এ)!");
    } catch (err) {
      console.error(err);
      message.reply("❌ পোস্ট পাঠানো যায়নি। পরে আবার চেষ্টা করো।");
    }
  }
};
