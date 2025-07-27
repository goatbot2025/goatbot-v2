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
    name: "bank",
    version: "1.0",
    author: "Newton",
    role: 0,
    category: "economy",
    guide: {
      en: "{pn} [deposit/withdraw] [amount]"
    }
  },

  onStart: async function ({ api, event, args }) {
    const uid = event.senderID;
    let data = getUserData(uid);
    let action = args[0];
    let amount = parseInt(args[1]);

    if (!["deposit", "withdraw"].includes(action) || isNaN(amount) || amount <= 0) {
      return api.sendMessage("🔁 Usage: bank [deposit/withdraw] [amount]", event.threadID);
    }

    let user = data[uid];

    if (action === "deposit") {
      if (user.money < amount) return api.sendMessage("❌ Not enough pocket coins.", event.threadID);
      user.money -= amount;
      user.bank += amount;
    } else {
      if (user.bank < amount) return api.sendMessage("❌ Not enough coins in bank.", event.threadID);
      user.bank -= amount;
      user.money += amount;
    }

    saveUserData(data);
    api.sendMessage(`✅ Successfully ${action}ed ${amount} coins.`, event.threadID);
  }
};
