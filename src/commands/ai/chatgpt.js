module.exports = {
  config: {
    name: "chatgpt",
    aliases: ["gpt"],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Chat with AI",
    longDescription: "Talk to ChatGPT directly from Messenger",
    category: "ai",
    guide: {
      en: "{pn} [question]"
    }
  },

  onStart: async function ({ api, event, args }) {
    const question = args.join(" ");
    if (!question) return api.sendMessage("❌ Please ask something for ChatGPT to answer.", event.threadID);

    // Placeholder
    api.sendMessage("🤖 ChatGPT reply: [Coming soon]", event.threadID);
  }
};
