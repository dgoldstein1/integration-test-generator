// logger.js

const chalk = require("chalk");

// logging levels
var LoggingLevels = {
  INFO: chalk.white,
  ERROR: chalk.bgRed,
  SUCCESS: chalk.bgGreen
};
Object.freeze(LoggingLevels);

/**
 * general
 * @param {string} thing to log
 * @param {string} level (one of LoggingLevels keys)
 **/
let log = (msg, level = "INFO") => {
  // check if is valid loggic level
  if (!LoggingLevels[level])
    console.error("Bad logging level " + level + " passed to log()");
  // else log normally
  console.log(LoggingLevels[level](level), ":", LoggingLevels[level](msg));
};

/**
 * logs, but exists if level is "ERROR"
 **/
let logAndExitOnError = (msg, exitCode = 0) => {
  let level = "INFO";
  if (exitCode !== 0) level = "ERROR";
  log(msg, level);

  // quit if error
  if (level === "ERROR") process.exit(1);
};

module.exports = {
  LoggingLevels,
  log,
  logAndExitOnError
};
