module.exports = {
  config: {
    name: "bomber",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 10,
    role: 1,
    shortDescription: "Message bomber",
    longDescription: "Send repeated messages to target user",
    category: "admin",
    guide: {
      en: "{pn} <uid> <count> <message>"
    }
  },

  onStart: async function ({ args, message, api, event }) {
    const [uid, countStr, ...msgArr] = args;
    const count = parseInt(countStr);
    const msg = msgArr.join(" ");

    if (!uid || isNaN(count) || !msg) {
      return message.reply("❌ Usage: bomber <uid> <count> <message>");
    }

    for (let i = 0; i < count; i++) {
      await new Promise(r => setTimeout(r, 1000)); // 1 sec delay
      api.sendMessage(msg, uid);
    }

    message.reply(`✅ Bombed ${count} messages to UID ${uid}`);
  }
};
