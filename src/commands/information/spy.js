module.exports = {
  config: {
    name: "spy",
    version: "1.0",
    author: "newton",
    countDown: 10,
    role: 2,
    shortDescription: "Spy a user",
    longDescription: "Spy on user's last seen or activity",
    category: "information",
    guide: "{pn} <@mention>"
  },

  onStart: async function ({ event, message }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.send("🕵️ কাউকে ট্যাগ কর!");

    message.send(`👁️ তুমি ${mention} এর ওপর নজর রাখছো...`);
    // Place logic here if using external presence API
  }
};
