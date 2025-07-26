module.exports = {
  config: {
    name: "removevip",
    version: "1.0",
    author: "Newton",
    role: 2,
    shortDescription: "➖ Remove a user from VIP list",
    longDescription: "Removes a user from the bot's VIP list",
    category: "config",
    guide: "{pn} [@mention or UID]"
  },

  onStart: async function ({ event, args, api }) {
    const uid = Object.keys(event.mentions)[0] || args[0];
    if (!uid) return api.sendMessage("🛑 Mention or provide a UID to remove from VIP list.", event.threadID);

    global.vipUsers = global.vipUsers || new Set();
    global.vipUsers.delete(uid);
    return api.sendMessage(`✅ Removed from VIP list: ${uid}`, event.threadID);
  }
};
