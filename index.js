const { eventsHandler } = require('./src/handlers/eventsHandler');
const { commandsHandler } = require('./src/handlers/commandsHandler');
const { loadEnvironment } = require('./src/handlers/loader');
app.get("/", (req, res) => res.send("Bot is running"));
app.listen(process.env.PORT || 3000);
(async () => {
  try {
    await loadEnvironment();
    eventsHandler();
    commandsHandler();
  } catch (err) {
    console.error('🔥 Bot initialization error:', err);
  }
})();
const express = require("express");
const app = express();
