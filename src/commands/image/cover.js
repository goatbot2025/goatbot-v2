const axios = require("axios");
module.exports = {
  config: { name: "cover", version: "1.0", author: "newton", role: 0, shortDescription: "Generate cover image", category: "image", guide: "{pn} <text>" },
  onStart: async function({ args, message }) {
    const text = args.join(" ") || "GoatBot";
    try {
      const res = await axios.post("https://api.deepai.org/api/colorizer", null, { headers: { "api-key": process.env.DEEPAI_KEY }, responseType: "arraybuffer", data: { text } });
      message.reply({ body: `🎨 Here is your cover image:`, attachment: Buffer.from(res.data) });
    } catch {
      message.reply("❌ Cover creation failed.");
    }
  }
};
