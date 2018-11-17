// cli.test.js

const cli = require("./cli");
var execute = require("../utils/execute");
var generatefileID = require("../generator/generateFileID");

let path = process.env.ROOT_DIR;

describe("templates", () => {
  describe("cli", () => {
    test("positive test", done => {
      let callback = (err, stdOut) => {
        expect(err).toBeFalsy();
        done();
      };
      let endpoint = "get/examples/services/hello";
      let name = "PositiveTest";
      let cliTest = cli.generateFileFromTemplate(endpoint, name);

      let fileId = generatefileID(endpoint, name);
      let filePath = `${path}/src/templates/testFiles`;
      let fileName = `${fileId}.cli-test.js`;

      let command = `${path}/src/creator/createCliFile.sh ${filePath} ${fileName} '${cliTest}'`;
      execute(command, callback);
    });
  });
});
