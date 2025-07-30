module.exports = {
  config: {
    name: "setrankup",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Toggle rankup message",
    longDescription: "Enable or disable rankup notifications",
    category: "owner",
    guide: "{pn} on/off"
  },

  onStart: async function ({ args, message, threadsData, event }) {
    const option = args[0];
    const threadID = event.threadID;

    if (!["on", "off"].includes(option)) {
      return message.reply("❌ Use 'on' or 'off'");
    }

    await threadsData.set(threadID, "rankup", option === "on");
    message.reply(`✅ Rankup message has been ${option === "on" ? "enabled" : "disabled"}.`);
  }
};
