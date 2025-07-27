const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../../../storage/data.json");

module.exports = {
  config: {
    name: "banktop",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "economy",
    guide: {
      en: "{pn} - Show top bank holders"
    }
  },

  onStart: async function ({ api, event }) {
    const data = JSON.parse(fs.readFileSync(dataPath));
    const sorted = Object.entries(data)
      .map(([uid, d]) => ({ uid, bank: d.bank || 0 }))
      .sort((a, b) => b.bank - a.bank)
      .slice(0, 10);

    const msg = sorted.map((u, i) => `${i + 1}. UID: ${u.uid} ➜ ${u.bank} coins`).join("\n");
    api.sendMessage(`🏦 Top Bank Holders:\n\n${msg}`, event.threadID);
  }
};
