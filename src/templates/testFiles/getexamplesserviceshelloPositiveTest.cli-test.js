const testEndpoint = require("../definitions/testEndpoint");
const getexamplesserviceshelloPositiveTest = require("../tests/getexamplesserviceshelloPositiveTest");
var exec = require("child_process").exec;

describe("get/examples/services/hello", () => {
  test("PositiveTest", done => {
    let callback = (err, stdOut, stdError) => {
      try {
        expect(err).toBeFalsy();
        expect(() => JSON.parse(stdOut)).not.toThrow();
        if (getexamplesserviceshelloPositiveTest.expectedOutput !== undefined) {
          expect(JSON.parse(stdOut)).toEqual(
            getexamplesserviceshelloPositiveTest.expectedOutput
          );
        }
        done();
      } catch (e) {
        done.fail(e + stdOut + err);
      }
    };

    let command =
      "./src/cli/make_request.sh " +
      endpoint +
      getexamplesserviceshelloPositiveTest.method +
      " " +
      JSON.stringify(body);
    let endpoint =
      testEndpoint.default + getexamplesserviceshelloPositiveTest.path;
    let body = getexamplesserviceshelloPositiveTest.requestBody || {};
    exec(command, callback);
  });
});
