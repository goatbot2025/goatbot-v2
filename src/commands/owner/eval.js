module.exports = {
  config: {
    name: "eval",
    version: "1.0",
    author: "newton",
    role: 2,
    shortDescription: "Evaluate JavaScript code",
    longDescription: "Run arbitrary JavaScript code",
    category: "owner",
    guide: "{pn} [code]"
  },
  onStart: async function ({ args, message, event }) {
    const code = args.join(" ");
    if (!code) return message.reply("❌ Provide JS code to evaluate.");

    try {
      const evaled = await eval(code);
      message.reply(`✅ Result:\n${evaled}`);
    } catch (e) {
      message.reply(`❌ Error:\n${e}`);
    }
  }
};
