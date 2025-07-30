module.exports = {
  config: {
    name: "mybf",
    version: "1.0",
    author: "newton",
    countDown: 1,
    role: 0,
    shortDescription: "your BF",
    longDescription: "Shows your imaginary boyfriend",
    category: "love",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const names = ["Arif", "Siam", "Joy", "Tanvir", "Akash", "Nirob"];
    const pick = names[Math.floor(Math.random() * names.length)];
    message.send(`💙 তোমার বয়ফ্রেন্ড: ${pick}`);
  }
};
