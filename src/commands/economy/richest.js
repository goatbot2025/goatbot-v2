const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../../../storage/data.json");

module.exports = {
  config: {
    name: "richest",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "economy",
    guide: {
      en: "{pn} - Show richest user"
    }
  },

  onStart: async function ({ api, event }) {
    const data = JSON.parse(fs.readFileSync(dataPath));
    const sorted = Object.entries(data)
      .map(([uid, d]) => ({ uid, total: (d.money || 0) + (d.bank || 0) }))
      .sort((a, b) => b.total - a.total);

    const top = sorted[0];
    if (!top) return api.sendMessage("❌ No users found.", event.threadID);

    api.sendMessage(`👑 Richest User:\nUID: ${top.uid}\n💸 Total: ${top.total} coins`, event.threadID);
  }
};
