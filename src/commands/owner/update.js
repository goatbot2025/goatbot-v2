const { exec } = require("child_process");

module.exports = {
  config: {
    name: "update",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Update bot from Git",
    longDescription: "Pull the latest updates from the remote Git repository",
    category: "owner",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    exec("git pull", (error, stdout, stderr) => {
      if (error) {
        return message.reply(`❌ Update failed:\n${error.message}`);
      }
      if (stderr) {
        return message.reply(`⚠️ Git stderr:\n${stderr}`);
      }
      message.reply(`✅ Updated successfully:\n${stdout}`);
    });
  }
};
