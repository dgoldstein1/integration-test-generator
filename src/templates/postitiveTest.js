// postitiveTest.js

const headersAndFooters = require("./headersAndFooters");

/**
 * simple assertion of request === response
 * @param {json} sample request
 * @param {json} sample response
 * @param {string} method type
 * @return {json} test { name : "string", test : function(), success : undefined }
 **/
let positiveTest = (sampleRequest, sampleResponse, method) => {
  // create test file
  let test = `function() {return api[method.toLowerCase()](endpoint + path, requestBody)}`;
  // remove white space from string
  return {
    name: "PositiveTest",
    header: headersAndFooters.createHeader(
      sampleRequest,
      sampleResponse,
      method
    ),
    footer: headersAndFooters.createFooter(
      sampleRequest,
      "PositiveTest",
      method
    ),
    test: test.replace(/\n|\r/g, "")
  };
};

module.exports = {
  positiveTest
};
