module.exports = {
  config: {
    name: "war",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 4,
    role: 0,
    shortDescription: "Start war message",
    longDescription: "Sends a custom war-like message",
    category: "boxchat",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ api, event }) {
    const msg = `⚔️ 𝗪𝗔𝗥 𝗠𝗢𝗗𝗘 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘𝗗 ⚔️
Don't spam or misbehave!
Admins are watching...`;

    api.sendMessage(msg, event.threadID);
  }
};
