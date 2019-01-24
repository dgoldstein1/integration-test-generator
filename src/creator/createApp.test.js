// createApp.test.js

let createApp = require("./createApp");
let mockTestsObject = require("./mocks/tests");
var execute = require("../utils/execute");

let path = process.env.ROOT_DIR + "/src/creator/testFiles";

describe("createApp", () => {
  describe("copyTests", () => {
    let createdFile = `${
      process.env.ROOT_DIR
    }/src/creator/testFiles/src/tests/getexamplesserviceshelloPositiveTest.js`;
    beforeEach(done => {
      execute(`> ${createdFile}`, () => done());
    });

    afterEach(done => {
      execute(`rm ${createdFile}`, () => done());
    });

    it.skip("creates javascript file without error", done => {
      // The first argument of the first call to the function was 'hello'
      let callback = error => {
        // validate no error was thrown on running prettier
        expect(error).toBeUndefined();
        done();
      };
      createApp.copyTests(path, mockTestsObject, callback);
    });
    it("creates the expected test f1ile", done => {
      let callback = err => {
        expect(err).toBeUndefined();
        execute(
          `diff  ${
            process.env.ROOT_DIR
          }/src/creator/mocks/expectedTest.js ${createdFile}`,
          err => {
            expect(err).toBeNull();
            done();
          }
        );
      };
      createApp.copyTests(path, mockTestsObject, callback);
    });
  });
  describe.skip("mapping", () => {
    it("creates parseable mapping file from tests", done => {
      let callback = err => {
        expect(err).toBeFalsy();
        done();
      };
      createApp.createMappingFile(path, mockTestsObject, callback);
    });
  });
});
