const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "daily.json");

module.exports = {
  config: {
    name: "daily",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Claim daily reward",
    longDescription: "Get 100 coins, 20$ bank balance and 50 exp every 24 hours",
    category: "game",
    guide: "{pn}"
  },

  onStart: async function ({ event, message, usersData }) {
    const uid = event.senderID;
    const now = Date.now();

    let db = {};
    if (fs.existsSync(filePath)) {
      db = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    if (db[uid] && now - db[uid] < 86400000) {
      const remaining = 86400000 - (now - db[uid]);
      const hours = Math.floor(remaining / 3600000);
      const mins = Math.floor((remaining % 3600000) / 60000);
      return message.reply(`⏳ You already claimed your daily reward.\nCome back in ${hours}h ${mins}m`);
    }

    await usersData.addMoney(uid, 20);
    await usersData.set(uid, {
      money: (await usersData.get(uid)).money + 100,
      exp: (await usersData.get(uid)).exp + 50
    });

    db[uid] = now;
    fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
    message.reply("🎁 You've claimed:\n• 💰 100 coins\n• 🏦 20$ added to bank\n• ⭐ 50 EXP");
  }
};
