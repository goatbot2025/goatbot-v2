const fs = require("fs");

module.exports = {
  config: {
    name: "setavt",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Set bot avatar",
    longDescription: "Change the bot's avatar/profile picture using image attachment",
    category: "owner",
    guide: "{pn} (reply to an image)"
  },

  onStart: async function ({ message, event, api }) {
    if (!event.messageReply || !event.messageReply.attachments[0]) {
      return message.reply("❌ Reply to an image to set as bot avatar.");
    }

    const image = event.messageReply.attachments[0];
    const stream = await global.utils.getStreamFromURL(image.url);
    const path = __dirname + "/temp_avatar.jpg";
    const writeStream = fs.createWriteStream(path);
    stream.pipe(writeStream);

    writeStream.on("finish", () => {
      api.changeAvatar(fs.createReadStream(path), event.threadID, (err) => {
        if (err) return message.reply("❌ Failed to set avatar.");
        fs.unlinkSync(path);
        message.reply("✅ Bot avatar updated!");
      });
    });
  }
};
