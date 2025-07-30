module.exports = {
  config: {
    name: "whitelist",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Manage whitelist",
    longDescription: "Add or remove UIDs from whitelist",
    category: "owner",
    guide: "{pn} add/remove <uid>"
  },

  onStart: async function ({ args, message, threadsData }) {
    const action = args[0];
    const uid = args[1];

    if (!["add", "remove"].includes(action) || !uid) {
      return message.reply("❌ Usage: whitelist add/remove <uid>");
    }

    const whitelist = (await threadsData.get("global", "whitelist", [])) || [];

    if (action === "add") {
      if (!whitelist.includes(uid)) {
        whitelist.push(uid);
        await threadsData.set("global", "whitelist", whitelist);
        return message.reply(`✅ UID ${uid} added to whitelist.`);
      } else {
        return message.reply("⚠️ UID already in whitelist.");
      }
    }

    if (action === "remove") {
      const index = whitelist.indexOf(uid);
      if (index !== -1) {
        whitelist.splice(index, 1);
        await threadsData.set("global", "whitelist", whitelist);
        return message.reply(`✅ UID ${uid} removed from whitelist.`);
      } else {
        return message.reply("⚠️ UID not in whitelist.");
      }
    }
  }
};
