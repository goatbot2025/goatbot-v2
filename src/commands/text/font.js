const axios = require("axios");

module.exports = {
  config: {
    name: "font",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Font style generator",
    longDescription: "Convert text to various font styles",
    category: "text",
    guide: "{pn} <your text>"
  },

  onStart: async function ({ args, message }) {
    const text = args.join(" ");
    if (!text) {
      return message.reply("⚠️ দয়া করে কিছু টেক্সট দিন যেমন:\n*font Newton Biswas");
    }

    // Custom fonts (local)
    const customFonts = [
      `𝓝𝓔𝓦𝓣𝓞𝓝`,
      `🅝🅔🅦🅣🅞🅝`,
      `𝙽𝙴𝚆𝚃𝙾𝙽`,
      `🅽🅴🆆🆃🅾🅽`,
      `ＮＥＷＴＯＮ`,
      `𝑵𝑬𝑾𝑻𝑶𝑵`,
      `ℕ𝔼𝕎𝕋𝕆ℕ`,
      `ɴᴇᴡᴛᴏɴ`,
      `ηєωтση`,
      `🄽🄴🅆🅃🄾🄽`,
      `𝓷𝓮𝔀𝓽𝓸𝓷`,
      `『n』『e』『w』『t』『o』『n』`,
      `《n》《e》《w》《t》《o》《n》`,
      `𝒩𝑒𝓌𝓉𝑜𝓃`,
      `𝔑𝔈𝔚𝔗𝔒𝔑`,
      `𝐍𝐄𝐖𝐓𝐎𝐍`,
      `𝑵𝒆𝒘𝒕𝒐𝒏`,
      `𝗡𝗘𝗪𝗧𝗢𝗡`,
      `𝘕𝘌𝘞𝘛𝘖𝘕`,
      `𝕹𝕰𝖂𝕿𝕺𝕹`,
      `Ｎєωтσи`,
      `𝒩ℰ𝒲𝒯𝒪𝒩`,
      `【n】【e】【w】【t】【o】【n】`
    ];

    try {
      const res = await axios.get(`https://api.erdwpe.com/font?text=${encodeURIComponent(text)}`);
      const apiFonts = res.data.result;

      // Merge custom + API fonts
      const allFonts = [...customFonts, ...apiFonts];

      let reply = `🆎 '${text}' এর ${allFonts.length}+ ফন্ট স্টাইল:\n\n`;
      allFonts.forEach((f, i) => {
        reply += `${i + 1}. ${f}\n`;
      });

      message.reply(reply);
    } catch (err) {
      console.error(err);
      message.reply("❌ ফন্ট স্টাইল আনতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    }
  }
};
