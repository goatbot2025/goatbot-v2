const axios = require("axios");
module.exports = {
  config: { name: "batslap", version: "1.0", author: "newton", role: 0, shortDescription: "Generate batslap image", category: "image", guide: "{pn} <@mention>" },
  onStart: async function({ event, api }) {
    const mention = event.mentions && Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage("⚠️ Tag someone to batslap!", event.threadID);
    const profilePicUrl = await api.getUserInfo(mention).then(u => u[mention].profile_picture_url);
    api.sendMessage({ body: `🦇 ${mention} got slapped by ⚔️`, attachment: await axios.get(`https://api.deepai.org/api/batslap`, { headers: { "api-key": process.env.DEEPAI_KEY }, responseType: "arraybuffer", params: { image: profilePicUrl } }) }, event.threadID);
  }
};
