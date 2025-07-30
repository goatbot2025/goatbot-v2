module.exports = {
  config: {
    name: "marry",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "propose to marry",
    longDescription: "Propose someone to marry",
    category: "love",
    guide: "{pn} @mention"
  },

  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.send("💍 কাকে বিয়ের প্রস্তাব দিচ্ছো তা mention করো!");

    const name = event.mentions[mention].replace("@", "");
    message.send(`💞 ${event.senderID} বিয়ের প্রস্তাব দিচ্ছে ${name} কে! 👰🤵`);
  }
};module.exports = {
  config: {
    name: "marry",
    version: "1.0",
    author: "newton",
    countDown: 3,
    role: 0,
    shortDescription: "propose to marry",
    longDescription: "Propose someone to marry",
    category: "love",
    guide: "{pn} @mention"
  },

  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.send("💍 কাকে বিয়ের প্রস্তাব দিচ্ছো তা mention করো!");

    const name = event.mentions[mention].replace("@", "");
    message.send(`💞 ${event.senderID} বিয়ের প্রস্তাব দিচ্ছে ${name} কে! 👰🤵`);
  }
};
