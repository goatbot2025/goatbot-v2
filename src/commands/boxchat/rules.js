module.exports = {
  config: {
    name: "rules",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 2,
    role: 0,
    shortDescription: "Group rules",
    longDescription: "Shows custom group rules",
    category: "boxchat",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ api, event }) {
    const rules = `📜 𝗚𝗿𝗼𝘂𝗽 𝗥𝘂𝗹𝗲𝘀:
1. No spam.
2. Be respectful.
3. No NSFW.
4. Follow admin instructions.`;
    api.sendMessage(rules, event.threadID);
  }
};
