// mapping.test.js

const template = require("./mapping");
var exec = require("child_process").exec;
var mockMappingString = require("./testFiles/expectedMappingString");

var mockTests = {
  "get/examples/services/hello": {
    PositiveTest: {
      name: "PositiveTest",
      test:
        "function() {    return api['get'](endpoint + '/examples/services/hello',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {\"text\":\"cUGLc\"})      });    });  }"
    },
    NegativeTest: {
      name: "NegativeTest",
      test:
        "function() {    return api['get'](endpoint + '/examples/services/hello',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {\"text\":\"cUGLc\"})      });    });  }"
    }
  }
};

function execute(command, callback) {
  exec(command, function(error, stdout, stderr) {
    callback(error);
  });
}

describe("templates", () => {
  describe.skip("mapping", () => {
    it("creates correct string", () => {
      let mappingString = template(mockTests, "out");
      expect(mappingString).toEqual(mockMappingString);
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
