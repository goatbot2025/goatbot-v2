const { eventsHandler } = require('./handlers/eventsHandler');
const { commandsHandler } = require('./handlers/commandsHandler');
const { loadEnvironment } = require('./handlers/loader');
const logger = require('./utils/logger');

(async () => {
  try {
    await loadEnvironment();
    logger.info('✅ Environment loaded.');

    await eventsHandler();
    logger.info('⚡ Events handler initialized.');

    await commandsHandler();
    logger.info('⚡ Commands handler initialized.');

    logger.success('🤖 GoatBot Messenger UserBot is running!');
  } catch (err) {
    logger.error('🔥 Bot initialization failed:', err);
  }
})();
