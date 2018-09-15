// execute.js

var exec = require("child_process").exec;

module.exports = function(command, callback) {
  exec(command, function(error, stdout, stderr) {
    if (stdout) console.log(stdout);
    if (error) console.log(error);
    callback(error);
  });
};
