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
 * @return {string} output to stdout
 **/
let log = (msg, level = "INFO", stdOutOnly = false) => {
  // check if is valid loggic level
  if (!LoggingLevels[level]) {
    let err = "Bad logging level " + level + " passed to log()";
    console.error(err);
    return err;
  }
  if (typeof msg === "object") msg = JSON.stringify(msg, null, 2);
  // else log normally
  let out = level + " : " + msg;
  console.log(LoggingLevels[level](out));
  return out;
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
