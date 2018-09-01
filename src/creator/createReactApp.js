// createReactApp.js

var execute = require("../utils/execute");

/**
 * runs the create-react-app command
 * @param {string} path of where to create the app
 * @return {{err : string}} in callback
 **/
let createReactApp = function(path, tests, callback) {
  console.log("creating app, this may take a few minutes..");
  let command = " ./src/creator/createReactApp.sh " + path;
  console.log("$ " + command);
  execute.execute(command, err => {
    if (err) {
      err = "Command failed : " + err.cmd;
    }
    callback({ err });
  });
};

module.exports = {
  createReactApp
};
