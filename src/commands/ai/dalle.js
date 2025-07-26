module.exports = {
  config: {
    name: "dalle",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Generate image",
    longDescription: "Generate an image using DALL·E",
    category: "ai",
    guide: {
      en: "{pn} [prompt]"
    }
  },

  onStart: async function ({ api, event, args }) {
    const prompt = args.join(" ");
    if (!prompt) return api.sendMessage("🖼️ Please provide a prompt to generate image.", event.threadID);

    // Placeholder
    api.sendMessage("🧠 DALL·E image generation is being prepared.", event.threadID);
  }
};
