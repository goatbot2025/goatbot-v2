module.exports = {
  config: {
    name: "loadconfig",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Reload config",
    longDescription: "Reloads the configuration file without restart",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    delete require.cache[require.resolve("../../../config.json")];
    global.config = require("../../../config.json");
    message.reply("✅ Configuration reloaded!");
  }
};
