// mapping.js

var generatefileID = require("../generator/generateFileID");

/**
 * @param {json} map of test objects
 * @return {string} complete file ready to be exported to tests/mapping.js
 **/
let mapping = (tests, path) => {
  // first let's isolate out the tests
  let mapping = {};
  let filePath = `${path}/src/tests`;
  let imports = [];
  // array of json for endpoint objects
  let endpoints = [];
  testObject = [];
  for (let endpoint in tests) {
    for (let test in tests[endpoint]) {
      // add test to mapping if not already there
      let fileID = generatefileID(endpoint, test);
      mapping[endpoint] = mapping[endpoint] || {};
      // add to JSON
      mapping[endpoint][fileID] = {
        name: tests[endpoint][test].name,
        ID: fileID,
        test: "~~~" + fileID + "~~~"
      };
      imports.push(fileID);
    }
  }

  // repalce quotes to make tests a variable
  mapping = JSON.stringify(mapping);
  mapping = mapping.replace(new RegExp('"~~~', "g"), "");
  mapping = mapping.replace(new RegExp('~~~"', "g"), "");
  mapping = mapping.replace(new RegExp('"', "g"), "'");

  // return `{'${o.endpoint}' : { ID : '${o.ID}' }}`;

  // return stringified file
  return `
    // mapping.js
    ${imports.map(id => `import ${id} from './${id}';`).join("")}

    export default ${mapping};
  `;
};

module.exports = mapping;
