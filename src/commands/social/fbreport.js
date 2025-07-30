module.exports = {
  config: {
    name: "fbreport",
    version: "1.0",
    author: "newton",
    countDown: 15,
    role: 0,
    shortDescription: "Report a user",
    longDescription: "Send a fake report notice about a user",
    category: "social",
    guide: "{pn} @mention"
  },
  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("❌ কাউকে মেনশন করো রিপোর্ট করতে।");

    const name = event.mentions[mention];
    const text = `⚠️ ${name} (UID: ${mention})-কে রিপোর্ট করা হয়েছে ফেসবুক টার্মস ভাঙার জন্য।`;

    message.send(text);
  }
};
