module.exports = {
  config: {
    name: "viplist",
    version: "1.0",
    author: "Newton",
    role: 1,
    shortDescription: "⭐ Show VIP list",
    longDescription: "Displays all users in the VIP list",
    category: "config",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const vips = [...(global.vipUsers || [])];
    if (vips.length === 0) return api.sendMessage("📭 No users in the VIP list.", event.threadID);

    const list = vips.map((uid, i) => `${i + 1}. ${uid}`).join("\n");
    return api.sendMessage(`⭐ VIP Users:\n\n${list}`, event.threadID);
  }
};
