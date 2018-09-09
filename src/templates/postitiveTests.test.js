// postitiveTests.test.js

const template = require("./postitiveTest");
var exec = require("child_process").exec;

function execute(command, callback) {
  exec(command, function(error, stdout, stderr) {
    callback(error);
  });
}

describe("templates", () => {
  describe("postitiveTest", () => {
    let sampleRequest = {
      request: {
        query: "q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz",
        pathname: "/listSpaces",
        path:
          "/listSpaces?q=zEuGgVuq&offset=vq&perPage=tZKeJkKl&iHavePermission=NPIz"
      }
    };
    let sampleResponse = {
      responses: {
        "200": {
          count: "DYD",
          spaces: [
            {
              ID: "YrTCZYEJ",
              name: "ALeXKpX",
              creator: "zcaIGtyGIwZ",
              created: "ugCwMNYmZ",
              numberOfMembers: "hDQgaXZVOk"
            }
          ]
        }
      }
    };
    it("creates correct string", () => {
      let test = template.positiveTest(sampleRequest, sampleResponse, "get");
      expect(test.success).toBeUndefined();
      expect(test.name).toEqual("PositiveTest");
      expect(test.test).toEqual(
        'function() {    return api[\'get\'](endpoint + \'/listSpaces\',{}).then(res => {      return Promise.resolve({        success: _.isEqual(res.data, {"count":"DYD","spaces":[{"ID":"YrTCZYEJ","name":"ALeXKpX","creator":"zcaIGtyGIwZ","created":"ugCwMNYmZ","numberOfMembers":"hDQgaXZVOk"}]})      });    });  }'
      );
    });
    it("generates valid javascript", done => {
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
