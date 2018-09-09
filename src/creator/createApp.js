// createApp.js

var execute = require("../utils/execute");
var chain = require("../utils/chain");
var mappingTemplate = require("../templates/mapping");
var generatefileID = require("../generator/generateFileID");

/**
 * runs the create-react-app command
 * @param {string} path of where to create the app
 * @return {{err : string}} in callback
 **/
let createApp = function(path, tests, swaggerPath, callback) {
  console.log("creating app, this may take a few minutes..");
  let command = " ./src/creator/createApp.sh " + path;
  console.log("bash$ " + command);
  execute(command, err => {
    if (err) {
      err = "Command failed : " + err.cmd;
      return callback({ err });
    }
    // success, we created the app. Now let's transfer over the tests
    copyTests(path, tests, err => {
      if (err) {
        return callback(err);
      }
      // create mapping
      createMappingFile(path, tests, err => {
        if (err) return callback(err);
        // success! all tests have been added. Let's not prettify everthing :)
        let command =
          "cp " +
          swaggerPath +
          " " +
          path +
          "/src/definitions/swagger.json && prettier --write " +
          path +
          "/src/*";
        console.log("bash$ " + command);
        execute(command, callback);
      });
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
  let mapping = mappingTemplate(tests);
  let filePath = path + "/src/tests/mapping.js";
  // write to file and run prettier
  execute(
    `> ${filePath} && echo "${mapping}" >> ${filePath} && prettier --write ${filePath}`,
    callback
  );
};

/**
 * copies test files to path/src/tests
 * @param {string} the base path of the new project
 * @param {json} test objects (from generatecallbackcallbackTests)
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
        let fileID = generatefileID(endpoint, test);
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
  chain(undefined, -1, _createFileHelper, commands, callback);
};

// helper for creating js file with content as default export
let _createFileHelper = ({ filePath, fileID, content }, callback) => {
  let command =
    "./src/creator/createTestFile.sh " +
    filePath +
    " " +
    fileID +
    ' "' +
    content +
    '"';
  execute(command, err => {
    if (err) {
      console.error(err);
      callback(err);
    }
    callback();
  });
};

module.exports = {
  copyTests,
  createApp,
  createMappingFile
};
