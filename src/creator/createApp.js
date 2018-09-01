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
  console.log("bash$ " + command);
  execute.execute(command, err => {
    if (err) {
      err = "Command failed : " + err.cmd;
      return callback({ err });
    }
    // success, we created the app. Now let's transfer over the tests
    copyTests(path, tests, err => {
      if (err) {
        return callback(err);
      }
      // success! all tests have been added. Let's not prettify everthing :)
      let command = "prettier --write " + path + "/src/*";
      console.log("bash$ " + command);
      execute.execute(command, callback);
    });
  });
};

/**
 * 1) copies test files to path/src/tests
 * 2) creates mapping file in path/src/tests/mapping.js
 **/
let copyTests = function(path, tests, callback) {
  let mapping = {};
  let filePath = `${path}/src/tests`;
  let commands = [];
  // loop over tests creating new test file and adding it to the mapping
  for (let endpoint in tests) {
    for (let method in tests[endpoint]) {
      for (let test in tests[endpoint][method]) {
        // create test file
        let fileID = `${method}-${endpoint}-${test}.js`.replace(/\//g, "");
        let testFunction = tests[endpoint][method][test].test;
        // add a new singular file for each test
        // push arguments to stack
        commands.push({ filePath, fileID, testFunction, callback });
        // add to mapping
        let localPath = method + "/" + endpoint;
        // check if exists
        mapping[localPath] = mapping[localPath] || {};
        // add to JSON
        mapping[localPath][fileID] = {
          name: tests[endpoint][method][test].name,
          ID: fileID,
          success: undefined
        };
      }
    }
  }
  // create mapping
  let command =
    "> " +
    filePath +
    "/mapping.js && echo 'export default " +
    JSON.stringify(mapping, null, 2) +
    "' >> " +
    filePath +
    "/mapping.js";
  console.log("bash$ " + command);
  execute.execute(command, err => {
    if (err) return callback(err);
    // success! mapping created, let's create the rest of the files :)
    for (let i in commands) {
      _createFileHelper(commands[i]);
    }
    callback();
  });
};

// helper for creating js file with content as default export
let _createFileHelper = ({ filePath, fileID, content, callback }) => {
  let command =
    "./src/creator/createTestFile.sh " +
    filePath +
    " " +
    fileID +
    ' "' +
    content +
    '"';
  execute.execute(command, err => {
    if (err) {
      console.error(err);
      callback(err);
    }
  });
};

module.exports = {
  copyTests,
  createApp
};
