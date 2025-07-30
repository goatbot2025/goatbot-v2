module.exports = {
  config: {
    name: "banlist",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Show banned users and threads",
    longDescription: "Display a list of all banned user IDs and thread IDs",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    const banData = require("../../../storage/banlist.json");
    const users = banData.users || [];
    const threads = banData.threads || [];

    let msg = `🚫 𝗕𝗮𝗻𝗻𝗲𝗱 𝗟𝗶𝘀𝘁\n\n👤 𝗨𝘀𝗲𝗿𝘀:\n${users.join("\n") || "None"}\n\n💬 𝗧𝗵𝗿𝗲𝗮𝗱𝘀:\n${threads.join("\n") || "None"}`;
    message.reply(msg);
  }
};
