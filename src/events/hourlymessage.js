const { getStreamFromURL } = require("../utils/botAPI");
const fs = require("fs");

const hourlyMessages = JSON.parse(fs.readFileSync("storage/hourlymessage.json", "utf-8"));

module.exports = {
  config: {
    name: "hourlymessage",
    interval: 3600000, // 1 hour
  },

  async onRun({ api }) {
    const currentHour = new Date().getHours().toString();
    const msgData = hourlyMessages[currentHour];

    if (!msgData || !msgData.text) return;

    const allThreads = global.GoatBot.autoMessageThreads || [];
    for (const threadID of allThreads) {
      try {
        await api.sendMessage({
          body: msgData.text,
          attachment: await getStreamFromURL("https://files.catbox.moe/etxmzw.png") // prefix image
        }, threadID);
      } catch (err) {
        console.error(`❌ hourlymessage error in ${threadID}:`, err);
      }
    }
  }
};
