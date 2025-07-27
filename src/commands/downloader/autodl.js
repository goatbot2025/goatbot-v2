module.exports = {
  config: {
    name: "autodl",
    version: "1.0",
    author: "Newton",
    role: 1,
    category: "download",
    guide: {
      en: "{pn} [on/off] - Toggle auto-download for links"
    }
  },

  onStart: async function ({ api, event, args }) {
    const choice = args[0];
    if (!["on", "off"].includes(choice)) {
      return api.sendMessage("⚙️ Usage: autodl [on/off]", event.threadID);
    }

    global.autodl = (choice === "on");
    api.sendMessage(`✅ Auto download has been turned ${choice}`, event.threadID);
  },

  onMessage: async function ({ api, event }) {
    if (!global.autodl) return;
    const { body } = event;
    if (!body || !body.startsWith("http")) return;

    const { downloadMedia } = require("../../utils/downloader");
    try {
      const result = await downloadMedia(body);
      api.sendMessage({
        body: `📥 Auto-downloaded:`,
        attachment: result
      }, event.threadID);
    } catch (e) {
      api.sendMessage("⚠️ Auto-download failed.", event.threadID);
    }
  }
};
