const chalk = require("chalk");

function logInfo(...args) {
  console.log(chalk.blue("[INFO]"), ...args);
}

function logSuccess(...args) {
  console.log(chalk.green("[SUCCESS]"), ...args);
}

function logWarning(...args) {
  console.log(chalk.yellow("[WARN]"), ...args);
}

function logError(...args) {
  console.log(chalk.red("[ERROR]"), ...args);
}

module.exports = {
  logInfo,
  logSuccess,
  logWarning,
  logError
};
