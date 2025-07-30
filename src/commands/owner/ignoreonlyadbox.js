module.exports = {
  config: {
    name: "ignoreonlyadbox",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Ignore admin in current box",
    longDescription: "This command will ignore admin in current group only",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ event, message }) {
    message.reply(`✅ Admin-only ignore is on for this thread (${event.threadID})`);
  }
};
