// execute.js

var exec = require("child_process").exec;

module.exports = {
  execute: function(command, callback) {
    exec(command, function(error, stdout, stderr) {
      if (stdout) console.log(stdout);
      callback(error);
    });
  }
};