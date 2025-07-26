module.exports = {
  config: {
    name: "autoseen",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 1,
    shortDescription: "Turn on/off auto seen",
    longDescription: "Automatically sees new messages",
    category: "admin",
    guide: {
      en: "{pn} on | off"
    }
  },

  onStart: async function ({ args, message, event, commandName, threadsData, threadID }) {
    const status = args[0];
    if (!["on", "off"].includes(status)) {
      return message.reply(`⚙️ Usage: ${commandName} on | off`);
    }

    const enable = status === "on";
    await threadsData.set(threadID, enable, "settings.autoSeen");

    return message.reply(`✅ Auto seen is now ${enable ? "enabled" : "disabled"}`);
  }
};
