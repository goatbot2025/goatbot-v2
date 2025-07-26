module.exports = {
  config: {
    name: "addvip",
    version: "1.0",
    author: "Newton",
    role: 2,
    shortDescription: "➕ Add a user to VIP list",
    longDescription: "Adds a user to the bot's VIP list",
    category: "config",
    guide: "{pn} [@mention or UID]"
  },

  onStart: async function ({ event, args, api }) {
    const uid = Object.keys(event.mentions)[0] || args[0];
    if (!uid) return api.sendMessage("🛑 Mention or provide a UID to add to VIP list.", event.threadID);

    global.vipUsers = global.vipUsers || new Set();
    global.vipUsers.add(uid);
    return api.sendMessage(`✅ Added to VIP list: ${uid}`, event.threadID);
  }
};
