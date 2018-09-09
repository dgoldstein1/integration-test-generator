// createApp.test.js

let createApp = require("./createApp");
let mockTestsObject = require("./mocks/tests");
var execute = require("../utils/execute");

let path = "src/creator/testFiles";

describe("createApp", () => {
  describe("copyTests", () => {
    it("creates javascript file without error", done => {
      // The first argument of the first call to the function was 'hello'
      let callback = error => {
        // validate no error was thrown on running prettier
        expect(error).toBeUndefined();
        done();
      };
      createApp.copyTests(path, mockTestsObject, callback);
    });
    it("creates the expected test file", done => {
      let callback = err => {
        expect(err).toBeUndefined();
        execute(
          "diff src/creator/mocks/expectedTest.js src/creator/testFiles/src/tests/getexamplesserviceshelloPositiveTest.js",
          err => {
            expect(err).toBeNull();
            done();
          }
        );
      };
      createApp.copyTests(path, mockTestsObject, callback);
    });
  });
  describe("mapping", () => {
    it("creates parseable mapping file from tests", done => {
      let callback = err => {
        expect(err).toBeFalsy();
        done();
      };
      createApp.createMappingFile(path, mockTestsObject, callback);
    });
  });
});
