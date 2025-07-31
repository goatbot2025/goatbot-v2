module.exports = { config: { name: "album", version: "1.0", author: "newton", role: 0, shortDescription: "Send album image", longDescription: "Sends a random album-style image", category: "media", guide: "{pn}" },

onStart: async function ({ message }) { const images = [ "https://files.catbox.moe/album1.jpg", "https://files.catbox.moe/album2.jpg" ]; const img = images[Math.floor(Math.random() * images.length)]; message.reply({ attachment: await global.utils.getStreamFromURL(img) }); } };
