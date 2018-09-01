// generateTests.js

const Swagmock = require("swagmock");
const api = require("../utils/api");
const _ = require("lodash");

// templates
const positiveTestTemplate = require("../templates/postitiveTest");

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
let generateTests = (requests, responses, endpoint = "") => {
  let tests = {};
  // loop through outer endpoins
  for (let endpoint in requests) {
    // loop through each method in each endpoint
    for (let method in requests[endpoint]) {
      // add in form "get/listSpaces"
      let testObject = generateTestObject(
        requests[endpoint][method],
        responses[endpoint][method],
        method,
        endpoint
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
 * @param {string} base endpoint
 * @return {json} {error : "string", testObject : {json}}
 **/
let generateTestObject = (
  sampleRequest,
  sampleResponse,
  method,
  endpoint = ""
) => {
  if (method === "delete") method = "del";
  if (!api[method]) return { error: "Method " + method + " is not supported" };
  // generate the tests
  let tests = [
    positiveTestTemplate.positiveTest(
      sampleRequest,
      sampleResponse,
      method,
      endpoint
    )
  ];
  // create test object
  let testObject = {};
  tests.forEach(test => {
    testObject[test.name] = test;
  });
  return { testObject };
};

module.exports = {
  generateAll,
  generateTests,
  generateTestObject
};
