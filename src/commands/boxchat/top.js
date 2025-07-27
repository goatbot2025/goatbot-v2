module.exports = {
  config: {
    name: "top",
    aliases: [],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Top users",
    longDescription: "Shows top users based on activity",
    category: "boxchat",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ api, event, usersData }) {
    const users = await usersData.getAll();
    const sorted = users.sort((a, b) => b.messageCount - a.messageCount).slice(0, 10);
    const topList = sorted.map((u, i) => `${i + 1}. ${u.name}: ${u.messageCount} msgs`).join("\n");

    api.sendMessage(`🏆 𝗧𝗼𝗽 𝗔𝗰𝘁𝗶𝘃𝗲 𝗨𝘀𝗲𝗿𝘀:\n${topList}`, event.threadID);
  }
};
