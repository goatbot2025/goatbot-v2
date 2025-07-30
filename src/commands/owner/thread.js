module.exports = {
  config: {
    name: "thread",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Get thread info",
    longDescription: "Displays information about the current group thread",
    category: "owner",
    guide: "{pn}"
  },

  onStart: async function ({ threadsData, event, message }) {
    const thread = await threadsData.get(event.threadID);
    message.reply(`🧵 Thread Info:
• Name: ${thread.threadName}
• ID: ${thread.threadID}
• Emoji: ${thread.emoji}
• Admins: ${thread.adminIDs.length}
• Member count: ${thread.members.length}`);
  }
};
