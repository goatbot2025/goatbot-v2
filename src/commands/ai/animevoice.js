const axios = require("axios");
module.exports = {
  config: { name: "animevoice", version: "1.0", author: "newton", role: 0, shortDescription: "Generate anime voice TTS", category: "ai", guide: "{pn} <text>" },
  onStart: async function({ args, message }) {
    const text = args.join(" ");
    if (!text) return message.reply("⚠️ Please provide text.");
    try {
      const res = await axios.post("https://api.voicerss.org/", null, {
        params: {
          key: ba37c9cfdd1f4751a2534c889d6b5d70,
          hl: "en-us",
          src: text
        },
        responseType: "arraybuffer"
      });
      message.reply({attachment: Buffer.from(res.data), filename: "voice.mp3"});
    } catch (err) {
      console.error(err);
      message.reply("❌ Voice generation failed.");
    }
  }
};
