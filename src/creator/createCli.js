// createCli.js

const cliTemplate = require("../templates/cli");
var execute = require("../utils/execute");
var chain = require("../utils/chain");
var generatefileID = require("../generator/generateFileID");

/**
 * @param {string} out directory
 * @param {json} test mappings
 * @param {function} callback
 **/
let init = (endpoint, out, tests, callback) => {
  // first create testEndpoint definition
  let args = _createCliTests(tests, out + "/src/cli");
  chain(undefined, -1, _createCliFile, args, callback);
};

/**
 * creates one cli file
 * @param {json} with test and fullFileName attributes
 * @param {function} callback
 **/
let _createCliFile = ({ test, fileName, filePath }, callback) => {
  let command = `createCliFile ${filePath} ${fileName} '${test}'`;
  execute(command, callback);
};

/**
 * @param {string} out directory
 * @param {json} test objects in mapping
 * @return {array[json]} { test : testFile (string) , fullFileName : full (string) }
 **/
let _createCliTests = (tests, out) => {
  let cliTestArray = [];

  for (let endpoint in tests) {
    for (let testName in tests[endpoint]) {
      cliTestArray.push({
        test: cliTemplate.generateFileFromTemplate(endpoint, testName),
        fileName: generatefileID(endpoint, testName) + "cli.test.js",
        filePath: out
      });
    }
  }
  return cliTestArray;
};

module.exports = {
  init,
  _createCliTests,
  _createCliFile
};
