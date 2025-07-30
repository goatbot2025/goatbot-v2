// module.exports for nonteach
module.exports = {
  config: {
    name: "nonteach",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Say non-teach quote",
    longDescription: "Bot will say a random Newton-style non-teaching dialogue",
    category: "newton",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const quotes = [
      "📚 আমি পড়াই না, আমি বোঝাইও না, আমি শুধু ভয় দেখাই 😈",
      "🤓 পড়াশোনা জীবনের জন্য জরুরি না, লাইফে চলার জন্য Newton লাগবে!",
      "🧠 মনে রেখো, যাকে তুমি জ্ঞানী ভাবো, সে-ও গুগল করে দেখে!",
      "💡 গুরু Newton বলেছে — চিন্তা করো, না পারলে আমায় ডেকো।",
      "👨‍🏫 Non-teach mood: ON 🔥"
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    message.reply(quote);
  }
};
