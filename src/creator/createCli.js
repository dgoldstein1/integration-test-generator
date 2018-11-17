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
let init = (out, tests, callback) => {
  let args = _createCliTests(tests);
  chain(undefined, -1, _createCliFile, args, callback);
};

/**
 * creates one cli file
 * @param {json} with test and fullFileName attributes
 * @param {function} callback
 **/
let _createCliFile = ({ fullFileName, test }, callback) => {
  let command = `createCliFile ${fullFileName} '${test}'`;
  execute(command, callback);
};

/**
 * @param {json} test objects in mapping
 * @return {array[json]} { test : testFile (string) , fullFileName : full (string) }
 **/
let _createCliTests = tests => {
  let cliTestArray = [];

  for (let endpoint in tests) {
    for (let testName in tests[endpoint]) {
      cliTestArray.push({
        test: cliTemplate.generateFileFromTemplate(endpoint, testName),
        fullFileName: generatefileID(endpoint, testName)
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
