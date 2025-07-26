module.exports = {
  config: {
    name: "setprefix",
    version: "1.0",
    author: "Newton",
    role: 2,
    shortDescription: "🔧 Set bot prefix",
    longDescription: "Changes the command prefix used by the bot",
    category: "config",
    guide: "{pn} [new prefix]"
  },

  onStart: async function ({ args, api, event }) {
    const newPrefix = args[0];
    if (!newPrefix) return api.sendMessage("❌ Please provide a new prefix.", event.threadID);

    global.botPrefix = newPrefix;
    return api.sendMessage(`✅ Prefix changed to: ${newPrefix}`, event.threadID);
  }
};
