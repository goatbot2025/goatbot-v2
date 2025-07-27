module.exports = {
  config: {
    name: "sendnoti",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 3,
    role: 1,
    shortDescription: "Send notification",
    longDescription: "Send notification to all threads",
    category: "boxchat",
    guide: { en: "{pn} message" }
  },

  onStart: async function ({ api, args }) {
    const msg = args.join(" ");
    const threads = global.data.allThreadID || [];

    for (const tid of threads) {
      api.sendMessage(msg, tid);
      await new Promise(r => setTimeout(r, 500));
    }
  }
};
