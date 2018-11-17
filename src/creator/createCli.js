// createCli.js

const cliTemplate = require("../templates/cli");

/**
 * @param {string} out directory
 * @param {json} test mappings
 * @param {function} callback
 **/
let init = (out, tests, callback) => {
  console.log(JSON.stringify(tests));
  callback();
};

/**
 * @param {json} test objects in mapping
 * @return {array[json]} { test : testFile (string) , name : full (string) }
 **/
let _createCliTests = tests => {
  let cliTestArray = [];

  for (let endpoint in tests) {
    for (let testName in tests[endpoint]) {
      cliTestArray.push({
        test: cliTemplate.generateFileFromTemplate(endpoint, testName),
        name: testName
      });
    }
  }
  return cliTestArray;
};

module.exports = {
  init,
  _createCliTests
};
