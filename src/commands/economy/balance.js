const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../../../storage/data.json");

function getUserData(uid) {
  let data = JSON.parse(fs.readFileSync(dataPath));
  if (!data[uid]) {
    data[uid] = { money: 0, bank: 0 };
  }
  return data;
}

function saveUserData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = {
  config: {
    name: "balance",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "economy",
    guide: {
      en: "{pn} - Show your balance"
    }
  },

  onStart: async function ({ api, event }) {
    const uid = event.senderID;
    const data = getUserData(uid);
    const { money, bank } = data[uid];

    api.sendMessage(
      `💰 Balance Info:\n\n👜 Pocket: ${money} coins\n🏦 Bank: ${bank} coins`,
      event.threadID
    );
  }
};
