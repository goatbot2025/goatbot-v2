module.exports = {
  config: {
    name: "mygf",
    version: "1.0",
    author: "newton",
    countDown: 1,
    role: 0,
    shortDescription: "your GF",
    longDescription: "Shows your imaginary girlfriend",
    category: "love",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const names = ["Anika", "Sweety", "Riya", "Mahi", "Tina", "Tumpa"];
    const pick = names[Math.floor(Math.random() * names.length)];
    message.send(`🌸 তোমার গার্লফ্রেন্ড: ${pick}`);
  }
};
