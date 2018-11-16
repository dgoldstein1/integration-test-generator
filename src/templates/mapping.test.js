// mapping.test.js

const template = require("./mapping");
var exec = require("child_process").exec;

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
var mockTests2 = require("../generator/mocks/generatedSwaggerTests");

function execute(command, callback) {
  exec(command, function(error, stdout, stderr) {
    callback(error);
  });
}

describe("templates", () => {
  describe("mapping", () => {
    it("creates correct string", () => {
      let mappingString = template(mockTests, "out");

      let stringExports = `export default {'get/examples/services/hello':{'getexamplesserviceshelloPositiveTest':{'name':'PositiveTest','ID':'getexamplesserviceshelloPositiveTest','test':getexamplesserviceshelloPositiveTest},'getexamplesserviceshelloNegativeTest':{'name':'NegativeTest','ID':'getexamplesserviceshelloNegativeTest','test':getexamplesserviceshelloNegativeTest}}};`;
      let stringTests = `import { getexamplesserviceshelloPositiveTest } from './getexamplesserviceshelloPositiveTest';import { getexamplesserviceshelloNegativeTest } from './getexamplesserviceshelloNegativeTest';`;

      expect(mappingString.includes(stringExports)).toEqual(true);
      expect(mappingString.includes(stringTests)).toEqual(true);
    });
    it("can be written to file and parsed with prettier", done => {
      let callback = error => {
        // validate no error was thrown on running prettier
        expect(error).toBeNull();
        // import and evalu javascript
        done();
      };

      let mappingString = template(mockTests, "out");
      let testFile = "src/templates/testFiles/mappingExported.js";
      // write to file and run prettier
      execute(
        `> ${testFile} && echo "${mappingString}" >> ${testFile} && npm run pretty ${testFile}`,
        callback
      );
    });
    it("generates more complicated tests", done => {
      let callback = error => {
        // validate no error was thrown on running prettier
        expect(error).toBeNull();
        // import and evalu javascript
        done();
      };

      let mappingString = template(mockTests2, "out");
      let testFile = "src/templates/testFiles/mappingExported2.js";
      // write to file and run prettier
      execute(
        `> ${testFile} && echo "${mappingString}" >> ${testFile} && npm run pretty ${testFile}`,
        callback
      );
    });
  });
});
