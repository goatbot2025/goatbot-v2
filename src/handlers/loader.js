const { loadCommands } = require("./commandsHandler");
const { loadEvents } = require("./eventsHandler");
const logger = require("../utils/logger.js");

function loadAllHandlers() {
  logger.info("🔄 Loading all handlers...");
  loadCommands();
  loadEvents();
  logger.info("✅ All handlers loaded successfully.");
}

module.exports = {
  loadAllHandlers
};
