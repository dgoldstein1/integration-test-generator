// postitiveTest.js

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
  sampleRequest = JSON.stringify(sampleRequest.request.body || {});
  sampleRequest = sampleRequest.replace(new RegExp('"', "g"), "'");
  // stringify and "" => '' for response
  sampleResponse = JSON.stringify(sampleResponse.responses["200"] || {});
  sampleResponse = sampleResponse.replace(new RegExp('"', "g"), "'");
  // create test file
  let test = `function() {
    return api['${String(
      method
    )}'](endpoint + '${pathname}',${sampleRequest}).then(res => {
      return Promise.resolve({
        success: _.isEqual(res.data, ${sampleResponse})
      });
    });
  }`;
  // remove white space from string
  return {
    name: "PositiveTest",
    test: test.replace(/\n|\r/g, "")
  };
};

module.exports = {
  positiveTest
};
