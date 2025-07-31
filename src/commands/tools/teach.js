const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../../storage/teach.json");

function loadTeachData() {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify({}));
  return JSON.parse(fs.readFileSync(dataPath));
}

function saveTeachData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = {
  config: {
    name: "teach",
    version: "1.0",
    author: "newton",
    countDown: 5,
    role: 0,
    shortDescription: "Bot ke kichu shikhano",
    longDescription: "Message-r reply-r upor vitti kore bot ke shikhano jabe",
    category: "tools",
    guide: "{pn} <question> => <answer>"
  },

  onStart: async function ({ args, message, event }) {
    const input = args.join(" ");
    if (!input.includes("=>")) return message.reply("⚠️ Format bhul!\n\n📝 Use:\n*teach <question> => <answer>");

    const [q, a] = input.split("=>").map(i => i.trim());
    if (!q || !a) return message.reply("❌ Question or answer missing!");

    const data = loadTeachData();
    data[q.toLowerCase()] = a;
    saveTeachData(data);

    return message.reply(`✅ শেখানো হয়েছে!\n\n❓: ${q}\n💬: ${a}`);
  },

  onChat: async function ({ message, event }) {
    const data = loadTeachData();
    const msg = event.body?.toLowerCase();

    if (data[msg]) {
      return message.reply(data[msg]);
    }

    // Save unknown msg for nonteach
    const unknownPath = path.join(__dirname, "../../../storage/unknown_teach.json");
    let unknowns = {};
    if (fs.existsSync(unknownPath)) unknowns = JSON.parse(fs.readFileSync(unknownPath));
    if (!unknowns[msg]) {
      unknowns[msg] = true;
      fs.writeFileSync(unknownPath, JSON.stringify(unknowns, null, 2));
    }
  }
};
