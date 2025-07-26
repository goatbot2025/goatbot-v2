module.exports = {
  config: {
    name: "callad",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Contact bot admin",
    longDescription: "Call the bot admin (owner) for help or support",
    category: "contacts-admin",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message, config }) {
    const adminInfo = `
👑 Bot Owner Info 👑

📛 Name: Newton
🌐 Facebook: ${config.OWNER_LINK}
📩 UID: ${config.OWNER_UID}
🤖 Bot Nickname: ${config.BOT_NICKNAME}

Need help? Feel free to message the owner!
    `.trim();

    message.reply(adminInfo);
  }
};
