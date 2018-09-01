// generateTests.js

const Swagmock = require("swagmock");
const api = require("../utils/api");
const _ = require("lodash");

let endpoint = "";

/**
 * generate tests which are then copied to the create react app path
 * @return {string} error, or undefined on success
 **/
let generateAll = (swaggerObject, out, baseEndpoint, callback) => {
  let Mockgen = Swagmock(swaggerObject);
  endpoint = baseEndpoint;
  Mockgen.responses({}, (error, responseMocks) => {
    // console.log(JSON.stringify(mock))
    Mockgen.requests({}, (error, requestMocks) => {
      // console.log(JSON.stringify(requestMocks))
    });
  });
};

/**
 * @param {json} example requests
 * @param {json} example responses
 * @return {json} {error : "string", tests : json object}
 **/
let generateTests = (requests, responses) => {
  let tests = {};
  // loop through outer endpoins
  for (let endpoint in requests) {
    // loop through each method in each endpoint
    for (let method in requests[endpoint]) {
      // add in form "get/listSpaces"
      let testObject = generateTestObject(
        requests[endpoint][method],
        responses[endpoint][method],
        method
      );
      // check for error
      if (testObject.error) return { error: testObject.error };
      // al is good, add to test object
      tests[method + endpoint] = testObject;
    }
  }
  return tests;
};

/**
 * generates test object
 * @param {json} sample request
 * @param {json} sample response object
 * @param {string} method (e.g. "get", "patch", etc)
 * @return {json} {error : "string", testObject : {json}}
 **/
let generateTestObject = (sampleRequest, sampleResponse, method) => {
  if (method === "delete") method = "del";
  if (!api[method]) return { error: "Method " + method + " is not supported" };
  // generate the tests
  let tests = [_generatePositiveTest(sampleRequest, sampleResponse, method)];
  // create test object
  let testObject = {};
  tests.forEach(test => {
    testObject[test.name] = test;
  });
  return { testObject };
};

/**
 * generates positive test, simple assertion of request === response
 * @param {json} sample request
 * @param {json} sample response
 * @param {string} method type
 * @return {json} test { name : "string", test : function(), success : undefined }
 **/
let _generatePositiveTest = (sampleRequest, sampleResponse, method) => {
  let test = function() {
    return api[method](
      endpoint + sampleRequest.path,
      sampleRequest.request.body
    ).then(res => {
      return Promise.resolve({
        success: _.isEqual(res.data, sampleResponse.responses["200"])
      });
    });
  };
  // cast test to string object
  return {
    name: "PositiveTest",
    test: String(test),
    success: undefined
  };
};

module.exports = {
  generateAll,
  generateTests,
  generateTestObject
};
