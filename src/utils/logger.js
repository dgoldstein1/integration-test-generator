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
  if (typeof msg === "object") msg = JSON.stringify(msg, null, 2);
  // else log normally
  console.log(LoggingLevels[level](level + " : " + msg));
};

/**
 * logs, but exists if level is "ERROR"
 **/
let logAndExitOnError = (msg, err = "") => {
  let level = "INFO";

  if (err) {
    level = "ERROR";
    log(msg + err, level);
    process.exit(1);
  } else {
    level = "SUCCESS";
    log(msg, level);
  }
};

module.exports = {
  LoggingLevels,
  log,
  logAndExitOnError
};
