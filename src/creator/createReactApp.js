// createReactApp.js

var exec = require("child_process").exec;

/**
 * runs the create-react-app command
 * @param {string} path of where to create the app
 * @return {{err : string}} in callback
 **/
let createReactApp = function(path, callback) {
  console.log("creating app, this may take a few minutes..");
  let command = " ./src/creator/createReactApp.sh " + path;
  console.log("$ " + command);
  execute(command, err => {
    if (err) {
      err = "Command failed : " + err.cmd;
    }
    callback({ err });
  });
};

function execute(command, callback) {
  exec(command, function(error, stdout, stderr) {
    console.log(stdout);
    callback(error);
  });
}

module.exports = {
  createReactApp
};
