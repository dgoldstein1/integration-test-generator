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
  // get endpoint to send the request
  let pathname = sampleRequest.request.pathname;
  // stringify and "" => '' for request
  let parsedSampleRequest = JSON.stringify(sampleRequest.request.body || {});
  parsedSampleRequest = parsedSampleRequest.replace(new RegExp('"', "g"), "'");
  // stringify and "" => '' for response
  let parsedSampleResponse = JSON.stringify(
    sampleResponse.responses["200"] || {}
  );
  parsedSampleResponse = parsedSampleResponse.replace(
    new RegExp('"', "g"),
    "'"
  );
  // create test file
  let test = `function() {
    return api['${String(
      method
    )}'](endpoint + '${pathname}',${parsedSampleRequest}).then(res => {
      return Promise.resolve({
        success: _.isEqual(res.data, ${parsedSampleResponse})
      });
    });
  }`;
  // remove white space from string
  return {
    name: "PositiveTest",
    header: headersAndFooters.createHeader(
      sampleRequest,
      sampleResponse,
      method
    ),
    footer: headersAndFooters.createFooter(sampleRequest, "PositiveTest"),
    test: test.replace(/\n|\r/g, "")
  };
};

module.exports = {
  positiveTest
};
