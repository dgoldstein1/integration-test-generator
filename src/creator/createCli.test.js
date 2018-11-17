// createCli.test.js

const cli = require("./createCli");
const { toBeType } = require("jest-tobetype");

let path = process.env.ROOT_DIR;

describe("creator", () => {
  expect.extend({
    toBeType
  });

  describe("cli", () => {
    let tests = {
      "get/examples/services/hello": {
        PositiveTest: {
          name: "PositiveTest",
          header:
            "    import api from '../api/api';    import endpoint from '../definitions/endpoint';    import _ from 'lodash';    let params = {};    let path = '/examples/services/hello' + api.paramsToUri(params);    let requestBody = {};    let method = 'GET';    let expectedOutput = {'text':'BTmlUi'};  ",
          footer:
            "export {getexamplesserviceshelloPositiveTest, method, requestBody, expectedOutput, path};",
          test:
            "function() {return api[method.toLowerCase()](endpoint + path, requestBody)}"
        }
      }
    };
    describe("_createCliTests", () => {
      let outDir = "out";
      let generatedArray = cli._createCliTests(tests, outDir);
      it("returns an array", () => {
        expect(generatedArray).toBeType("array");
      });
      it("returns values in correct format", () => {
        expect(generatedArray.length).toBeGreaterThan(0);
        expect(generatedArray[0].test).toBeType("string");
        expect(generatedArray[0].filePath).toBeType("string");
        expect(generatedArray[0].fileName).toBeType("string");
      });
      it("generates expected values", () => {
        expect(generatedArray[0].filePath).toEqual("out");
        expect(generatedArray[0].fileName).toEqual(
          "getexamplesserviceshelloPositiveTest"
        );
      });
    });

    describe("_createCliFile", () => {
      it("creates parseable file successfully", done => {
        let test =
          '\n  const testEndpoint = require("../definitions/testEndpoint");\n  const getexamplesserviceshelloPositiveTest = require("../tests/getexamplesserviceshelloPositiveTest");\n  var exec = require("child_process").exec;\n\n  describe("get/examples/services/hello", () => {\n    test("PositiveTest", done => {\n      let callback = (err, stdOut, stdError) => {\n\n\n        try {\n          expect(err).toBeFalsy();\n          expect(() => JSON.parse(stdOut)).not.toThrow();\n          if (getexamplesserviceshelloPositiveTest.expectedOutput !== undefined) {\n            expect(JSON.parse(stdOut)).toEqual(getexamplesserviceshelloPositiveTest.expectedOutput);\n          }\n          done();\n        } catch (e) { \n          done.fail(e + stdOut + err);\n        }\n      }\n\n\n      let command = "./src/cli/make_request.sh " + endpoint + getexamplesserviceshelloPositiveTest.method + " " + JSON.stringify(body);\n      let endpoint = testEndpoint.default + getexamplesserviceshelloPositiveTest.path;\n      let body = getexamplesserviceshelloPositiveTest.requestBody || {};\n      exec(command, callback);\n    })\n  })\n  ';
        let filePath = `${path}/src/creator/testFiles`;
        let fileName = "createdTestCliFile";
        let callback = (err, stdOut) => {
          expect(err).toBeFalsy();
          done();
        };
        cli._createCliFile({ test, filePath, fileName }, callback);
      });
    });

    describe("init", () => {
      it("returns on callback without error", done => {
        let callback = (err, stdOut) => {
          expect(err).toBeFalsy();
          done();
        };
        callback();
        let out = `${path}/src/creator/testFiles`;
        cli.init(out, tests, callback);
      });

      it("creates correct files", () => {
        expect(false);
      });
    });
  });
});
