const fs = require("fs");
const path = require("path");
const logger = require("../utils/logger.js");

const commands = new Map();

function loadCommands(dirPath = path.join(__dirname, "../commands")) {
  const categories = fs.readdirSync(dirPath);
  for (const category of categories) {
    const categoryPath = path.join(dirPath, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith(".js"));
    for (const file of files) {
      const commandPath = path.join(categoryPath, file);
      try {
        const command = require(commandPath);
        if (command?.config?.name) {
          commands.set(command.config.name, command);
          logger.info(`✅ Loaded command: ${command.config.name}`);
        } else {
          logger.warn(`⚠️ Skipped invalid command file: ${file}`);
        }
      } catch (err) {
        logger.error(`❌ Failed to load command ${file}: ${err.message}`);
      }
    }
  }
}

function getCommand(name) {
  return commands.get(name);
}

module.exports = {
  loadCommands,
  getCommand
};
