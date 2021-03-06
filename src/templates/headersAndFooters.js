// testHeaders.js

var generatefileID = require("../generator/generateFileID");

// headers which surround each test file
/**
 * @param {json} sample request
 * @param {json} sample response
 * @param {string} method type
 * @return {string} variables which go at the top of the app
 **/
let createHeader = (sampleRequest, sampleResponse, method) => {
  // get endpoint to send the request
  if (sampleRequest.request === undefined) {
    console.log(JSON.stringify(sampleRequest));
  }
  let pathname = sampleRequest.request.pathname;
  // stringify and "" => '' for request
  sampleRequest = JSON.stringify(sampleRequest.request.body || {});
  sampleRequest = sampleRequest.replace(new RegExp('"', "g"), "'");
  // stringify and "" => '' for response
  sampleResponse = JSON.stringify(sampleResponse.responses["200"] || {});
  sampleResponse = sampleResponse.replace(new RegExp('"', "g"), "'");

  let header = `
    import api from '../api/api';
    import endpoint from '../definitions/endpoint';
    import _ from 'lodash';

    let params = {};
    let path = '${pathname}' + api.paramsToUri(params);
    let requestBody = ${sampleRequest};
    let method = '${method.toUpperCase()}';
    let expectedOutput = ${sampleResponse};
  `;
  return header.replace(/\n|\r|\t/g, "");
};

module.exports = {
  createHeader
};
