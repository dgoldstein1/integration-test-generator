// cli.js

var generatefileID = require("../generator/generateFileID");

/**
 * @param {string} endpoint (e.g. 'get/examples/services/hello')
 * @param {string} name (i.e. 'PositiveTest')
 **/
let generateFileFromTemplate = (endpoint, name) => {
  let fileId = generatefileID(endpoint, name);

  // create test file
  let test = `
  const testEndpoint = require('../definitions/testEndpoint');
  const ${fileId} = require('../tests/${fileId}');
  var exec = require('child_process').exec;

  describe('${endpoint}', () => {
    test('${name}', done => {
      let callback = (err, stdOut, stdError) => {


        try {
          expect(err).toBeFalsy();
          expect(() => JSON.parse(stdOut)).not.toThrow();
          if (${fileId}.expectedOutput !== undefined) {
            expect(JSON.parse(stdOut)).toEqual(${fileId}.expectedOutput);
          }
          done();
        } catch (e) { 
          done.fail(e + stdOut + err);
        }
      }


      let endpoint = testEndpoint.default + ${fileId}.path;
      let body = ${fileId}.requestBody || {};
      let command = './src/cli/make_request.sh ' + endpoint + ${fileId}.method + ' ' + JSON.stringify(body);
      exec(command, callback);
    })
  })
  `;
  // remove white space from string
  return test.replace(/\n|\r/g, "");
};

module.exports = {
  generateFileFromTemplate
};
