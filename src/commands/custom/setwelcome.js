const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "setwelcome",
    aliases: ["welcome"],
    version: "1.0",
    author: "Newton",
    role: 2,
    category: "custom",
    guide: {
      en: "{pn} [on/off] - Enable or disable the welcome message"
    }
  },

  onStart: async function ({ api, event, args }) {
    const option = args[0];
    if (!option || !["on", "off"].includes(option)) {
      return api.sendMessage("⚙️ Usage: setwelcome [on/off]", event.threadID);
    }

    const filePath = path.join(__dirname, "../../../storage/data.json");
    let data = {};
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath));
    }

    const threadID = event.threadID;
    data[threadID] = data[threadID] || {};
    data[threadID].welcome = option === "on";

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return api.sendMessage(`✅ Welcome message has been ${option === "on" ? "enabled" : "disabled"}.`, threadID);
  }
};
