module.exports = {
  config: {
    name: "ignoreonlyad",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Ignore only admin in all box",
    longDescription: "Turn on ignore for only admins",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    message.reply("⚙️ Admin-only ignore is now enabled (simulation).");
  }
};
