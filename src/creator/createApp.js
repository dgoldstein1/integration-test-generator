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
 * creates path/src/tests/mapping.js
 * @param {string} base path of the new new project
 * @param {json} test objects from generate tests
 * @param {function callback} callback when finished
 **/
let createMappingFile = function(path, tests, callback) {
  let filePath = `${path}/src/tests`;
  let mapping = {};
  for (let endpoint in tests) {
    for (let method in tests[endpoint]) {
      for (let test in tests[endpoint][method]) {
        // add test to mapping if not already there
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
  // execute command
  execute.execute(command, callback);
};

/**
 * copies test files to path/src/tests
 * @param {string} the base path of the new project
 * @param {json} test objects (from generateTests)
 * @param {function} callback when finished
 **/
let copyTests = function(path, tests, callback) {
  let filePath = `${path}/src/tests`;
  let commands = [];

  // loop over tests creating new test file and adding it to the mapping
  for (let endpoint in tests) {
    for (let method in tests[endpoint]) {
      for (let test in tests[endpoint][method]) {
        // create test file
        let fileID = `${method}-${endpoint}-${test}.js`.replace(/\//g, "");
        let content = tests[endpoint][method][test].test;
        // add a new singular file for each test
        // push arguments to stack
        commands.push({ filePath, fileID, content });
      }
    }
  }
  // check that there are new tests to create
  if (commands.length == 0) return callback();
  // chain create file commands

  let chain = (err, i, func, cmds) => {
    // check if previous command succeeded
    if (err) return callback(err);
    // move onto next function, if there is one
    i++;
    if (!cmds[i]) return callback();
    // call next function
    cmds[i].callback = err => chain(err, i, func);
    chain(func(cmds[i]));
  };
  chain(undefined, 0, _createFileHelper, commands);
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
