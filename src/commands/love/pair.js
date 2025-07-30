module.exports = {
  config: {
    name: "pair",
    version: "1.0",
    author: "newton",
    countDown: 2,
    role: 0,
    shortDescription: "pair match",
    longDescription: "Randomly pairs you with someone",
    category: "love",
    guide: "{pn}"
  },

  onStart: async function ({ event, participantsData, message }) {
    const ids = Object.keys(participantsData).filter(id => id !== event.senderID);
    const random = ids[Math.floor(Math.random() * ids.length)];
    const yourName = participantsData[event.senderID]?.name || "তুমি";
    const pairName = participantsData[random]?.name || "অজানা";

    message.send(`💑 ${yourName} + ${pairName} = ❤️ Forever`);
  }
};
