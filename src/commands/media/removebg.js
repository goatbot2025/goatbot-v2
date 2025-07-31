const axios2 = require("axios"); const fs = require("fs");

module.exports = { config: { name: "removebg", version: "1.0", author: "newton", role: 0, shortDescription: "Remove background", longDescription: "Remove image background using remove.bg API", category: "media", guide: "{pn} (reply to image)" },

onStart: async function ({ message, event }) { if (!event.messageReply || !event.messageReply.attachments[0]?.type?.includes("photo")) { return message.reply("📸 দয়া করে একটি ছবির রিপ্লাই দিন যার ব্যাকগ্রাউন্ড আপনি রিমুভ করতে চান।"); }

const imgUrl = event.messageReply.attachments[0].url;
const apiKey = "rrqWBpxrwMb6Udzy5GeKoZyP";

try {
  const res = await axios2({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: {
      image_url: imgUrl,
      size: "auto"
    },
    headers: {
      "X-Api-Key": apiKey
    },
    responseType: "arraybuffer"
  });

  const path = __dirname + "/tmp.png";
  fs.writeFileSync(path, res.data);
  message.reply({ body: "🪄 Background removed!", attachment: fs.createReadStream(path) });
} catch (e) {
  console.error(e);
  message.reply("❌ ব্যাকগ্রাউন্ড রিমুভ করতে সমস্যা হয়েছে। API key ঠিক আছে তো?");
}

} };
