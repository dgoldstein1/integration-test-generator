// postitiveTest.js

/**
 * simple assertion of request === response
 * @param {json} sample request
 * @param {json} sample response
 * @param {string} method type
 * @param {string} base endpoint
 * @return {json} test { name : "string", test : function(), success : undefined }
 **/
let positiveTest = (sampleRequest, sampleResponse, method, endpoint = "") => {
  let test = `function() {
    return api['${String(method)}']('${endpoint}${
    sampleRequest.request.pathname
  }',${JSON.stringify(sampleRequest.request.body || {})}).then(res => {
      return Promise.resolve({
        success: _.isEqual(res.data, ${JSON.stringify(
          sampleResponse.responses["200"]
        )})
      });
    });
  }`;
  // remove white space from string
  return {
    name: "PositiveTest",
    test: test.replace(/\n|\r/g, ""),
    success: undefined
  };
};

module.exports = {
  positiveTest
};
