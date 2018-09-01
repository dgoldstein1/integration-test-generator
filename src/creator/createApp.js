// createApp.js

var execute = require("../utils/execute");

/**
 * runs the create-react-app command
 * @param {string} path of where to create the app
 * @return {{err : string}} in callback
 **/
let createApp = function(path, tests, callback) {
  console.log("creating app, this may take a few minutes..");
  let command = " ./src/creator/createApp.sh " + path;
  console.log("$ " + command);
  execute.execute(command, err => {
    if (err) {
      err = "Command failed : " + err.cmd;
      return callback({ err });
    }
    // success, we created the app. Now let's transfer over the tests
    return copyTests(path, tests, callback);
  });
};

/**
 * 1) copies test files to path/src/tests
 * 2) creates mapping file in path/src/tests/mapping.js
 **/
let copyTests = function(path, tests, callback) {
  let mapping = {};
  // loop over tests creating new test file and adding it to the mapping
  for (let endpoint in tests) {
    for (let method in tests[endpoint]) {
      for (let test in tests[endpoint][method]) {
        // create test file
        let filePath = `${path}/src/tests`;
        let fileName = `${method}-${endpoint}-${test}.js`.replace(/\//g, "");
        let testFunction = tests[endpoint][method][test].test;
        // add a new singular file for each test
        let command =
          "./src/creator/createTestFile.sh " +
          filePath +
          " " +
          fileName +
          ' "' +
          testFunction +
          '"';
        console.log("$ " + command);
        execute.execute(command, err => {
          if (err) {
            console.error(err);
            return callback(err);
          }
        });
      }
    }
  }
  // success! everything was created
  callback();
};

module.exports = {
  copyTests,
  createApp
};
