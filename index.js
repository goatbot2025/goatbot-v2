const { eventsHandler } = require('./src/handlers/eventsHandler');
const { commandsHandler } = require('./src/handlers/commandsHandler');
const { loadEnvironment } = require('./src/handlers/loader');

(async () => {
  try {
    await loadEnvironment();
    eventsHandler();
    commandsHandler();
  } catch (err) {
    console.error('🔥 Bot initialization error:', err);
  }
})();
