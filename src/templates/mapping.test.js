// mapping.test.js

const template = require("./mapping");
var exec = require("child_process").exec;
var mockTests = require("../creator/mocks/tests");

function execute(command, callback) {
  exec(command, function(error, stdout, stderr) {
    callback(error);
  });
}

describe("templates", () => {
  describe("mapping", () => {
    it("creates correct string", () => {
      let mappingString = template(mockTests, "out");
      expect(mappingString).toEqual("TODO");
    });
    it.skip("generates valid javascript", done => {
      let callback = error => {
        // validate no error was thrown on running prettier
        expect(error).toBeNull();
        // import and evalu javascript
        let method = require("./testFiles/postitiveTestExported");
        eval(method);
        done();
      };

      let test = template.positiveTest(sampleRequest, sampleResponse, "get");
      // write test "temp" and run prettier
      let testFile = "src/templates/testFiles/postitiveTestExported.js";
      execute(
        `> ${testFile} && echo "module.exports = {test  : ${
          test.test
        }}" >> ${testFile} && prettier ${testFile}`,
        callback
      );
    });
  });
});
