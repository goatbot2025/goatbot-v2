module.exports = {
  config: {
    name: "listbox",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "List all group threads",
    longDescription: "Shows a list of all group chat IDs where bot is present",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ threadsData, message }) {
    const allThreads = await threadsData.getAll();
    const groupThreads = allThreads.filter(t => t.isGroup);

    let msg = "📦 Group Threads:\n";
    groupThreads.forEach((thread, index) => {
      msg += `${index + 1}. ${thread.threadName} | ID: ${thread.threadID}\n`;
    });

    message.reply(msg || "❌ No group threads found.");
  }
};
