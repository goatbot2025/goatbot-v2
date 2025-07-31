const googleTTS = require("google-tts-api");

module.exports = { config: { name: "tts", version: "1.0", author: "newton", role: 0, shortDescription: "Text to speech", longDescription: "Convert text to voice", category: "media", guide: "{pn} <text>" },

onStart: async function ({ args, message }) { const text = args.join(" "); if (!text) return message.reply("🗣️ দয়া করে কিছু টেক্সট দিন। উদাহরণ: *tts Hello");

try {
  const url = googleTTS.getAudioUrl(text, {
    lang: "en",
    slow: false,
    host: "https://translate.google.com"
  });
  message.reply({ body: `🔊 Here's the voice:`, attachment: await global.utils.getStreamFromURL(url) });
} catch (e) {
  console.error(e);
  message.reply("❌ ভয়েসে রূপান্তর করতে সমস্যা হয়েছে।");
}

} };
