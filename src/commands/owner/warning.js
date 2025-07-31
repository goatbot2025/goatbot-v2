module.exports = {
  config: { name: "warning", version: "1.0", author: "newton", role: 1, shortDescription: "Send warning to user", category: "owner", guide: "{pn} <@mention> <message>" },
  onStart: async function({ event, api, message }) {
    const parts = message.body.split(" ");
    const mention = event.mentions && Object.keys(event.mentions)[0];
    const warnMsg = parts.slice(2).join(" ");
    if (!mention || !warnMsg) {
      return message.reply("⚠️ Format: *warning @user message");
    }
    api.sendMessage(`🚨 Warning to ${mention}: ${warnMsg}`, event.threadID);
  }
};
