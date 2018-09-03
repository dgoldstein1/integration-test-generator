// mapping.js

var generatefileID = require("../generator/generateFileID");

/**
 * @param {json} map of test objects
 * @return {string} complete file ready to be exported to tests/mapping.js
 **/
let mapping = (tests, path) => {
  // first let's isolate out the tests
  let filePath = `${path}/src/tests`;
  let imports = "";
  for (let endpoint in tests) {
    for (let method in tests[endpoint]) {
      for (let test in tests[endpoint][method]) {
        // add test to mapping if not already there
        let fileID = generatefileID(endpoint, test);
        mapping[endpoint] = mapping[endpoint] || {};
        // add to JSON
        mapping[endpoint][fileID] = {
          name: tests[endpoint][method][test].name,
          ID: fileID,
          test: fileID
        };
        imports += "import " + fileID + ' from "./' + fileID + '.js";';
      }
    }
  }

  return `
    ${imports}
  `;
};

module.exports = mapping;
