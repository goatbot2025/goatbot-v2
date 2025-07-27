const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../../../storage/data.json");

module.exports = {
  config: {
    name: "baltop",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "economy",
    guide: {
      en: "{pn} - Show top balances"
    }
  },

  onStart: async function ({ api, event }) {
    const data = JSON.parse(fs.readFileSync(dataPath));
    const sorted = Object.entries(data)
      .map(([uid, d]) => ({ uid, total: (d.money || 0) + (d.bank || 0) }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);

    const msg = sorted.map((u, i) => `${i + 1}. UID: ${u.uid} ➜ ${u.total} coins`).join("\n");
    api.sendMessage(`🏆 Top Balances:\n\n${msg}`, event.threadID);
  }
};
