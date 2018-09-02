// mapping.js

var generatefileID = require("../generator/generateFileID");

/**
 * @param {json} map of test objects
 * @return {string} complete file ready to be exported to tests/mapping.js
 **/
let mapping = (tests, path) => {
  // first let's isolate out the tests
  let filePath = `${path}/src/tests`;
  let mapping = {};
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
        imports += "import " + fileID + ' from "' + fileID + '.js";';
      }
    }
  }

  return "TODO";

  // // now return the templated string
  // let test = `function() {
  //   return api['${String(method)}']('endpoint + ${
  //   sampleRequest.request.pathname
  // }',${JSON.stringify(sampleRequest.request.body || {})}).then(res => {
  //     return Promise.resolve({
  //       success: _.isEqual(res.data, ${JSON.stringify(
  //         sampleResponse.responses["200"]
  //       )})
  //     });
  //   });
  // }`;
  // // remove white space from string
  // return {
  //   name: "PositiveTest",
  //   test: test.replace(/\n|\r/g, ""),
  // };
};

module.exports = mapping;
