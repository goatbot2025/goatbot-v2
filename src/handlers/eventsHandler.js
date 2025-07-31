const fs = require("fs");
const path = require("path");
const logger = require("../utils/logger.js");

const events = new Map();

function loadEvents(dirPath = path.join(__dirname, "../events")) {
  const files = fs.readdirSync(dirPath).filter(file => file.endsWith(".js"));
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    try {
      const event = require(filePath);
      const eventName = file.replace(".js", "");
      events.set(eventName, event);
      logger.info(`📦 Loaded event: ${eventName}`);
    } catch (err) {
      logger.error(`❌ Failed to load event ${file}: ${err.message}`);
    }
  }
}

function getEvent(name) {
  return events.get(name);
}

module.exports = {
  loadEvents,
  getEvent
};
