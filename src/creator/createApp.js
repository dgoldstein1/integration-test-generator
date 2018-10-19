// createApp.js

var execute = require("../utils/execute");
var chain = require("../utils/chain");
var mappingTemplate = require("../templates/mapping");
var generatefileID = require("../generator/generateFileID");

/**
 * runs the create-react-app command
 * @param {string} path of where to create the app
 * @return {{err : string}} in callback
 **/
let createApp = function(
  path,
  tests,
  swaggerPath,
  endpoint,
  generateonly,
  callback
) {
  console.log("creating app, this may take a few minutes..");
  let command = "createIntegrationTestApp " + path;
  console.log("bash$ " + command);
  execute(command, err => {
    if (err) {
      err = "Command failed : " + err.cmd;
      return callback({ err });
    }
    // success, we created the app. Now let's transfer over the tests
    copyTests(path, tests, err => {
      if (err) {
        return callback(err);
      }
      // create mapping
      createMappingFile(path, tests, err => {
        if (err) return callback(err);
        // success! all tests have been added. Let's not prettify everthing :)
        let command =
          "mkdir -p " +
          path +
          "/src/definitions && " +
          "cp " +
          swaggerPath +
          " " +
          path +
          "/src/definitions/swagger.json && npm run pretty " +
          path +
          "/src/*";
        console.log("bash$ " + command);
        execute(command, err => {
          if (err) return callback(err);
          // let's create the endpoint file
          command = `> ${path}/src/definitions/endpoint.js && echo "export default '${endpoint}'" >> ${path}/src/definitions/endpoint.js && find ${path}/src -name "*test.js" -type f -delete && npm run pretty ${path}/src/*`;
          console.log("bash$ " + command);
          execute(command, callback);
        });
      });
    });
  });
};

/**
 * creates path/src/tests/mapping.js
 * @param {string} base path of the new new project
 * @param {json} test objects from generate tests
 * @param {function callback} callback when finished
 **/
let createMappingFile = function(
  path,
  tests,
  callback = () => console.error("callback is undefined!!")
) {
  let mapping = mappingTemplate(tests);
  let filePath = path + "/src/tests/mapping.js";
  // write to file and run prettier
  execute(
    `> ${filePath} && echo "${mapping}" >> ${filePath} && npm run pretty ${filePath}`,
    callback
  );
};

/**
 * copies test files to path/src/tests
 * @param {string} the base path of the new project
 * @param {json} test objects (from generatecallbackcallbackTests)
 * @param {function} callback when finished
 **/
let copyTests = function(path, tests, callback) {
  let filePath = `${path}/src/tests`;
  let commands = [];
  // loop over tests creating new test file and adding it to the mapping
  for (let e in tests) {
    for (let method in tests[e]) {
      // create new test file by pushing arguments to stack
      let testObject = tests[e][method];
      commands.push({
        filePath,
        fileID: generatefileID(e, testObject.name),
        content: testObject.test
      });
    }
  }
  // check that there are new tests to create
  if (commands.length == 0) return callback();
  // chain create file commands
  chain(undefined, -1, _createFileHelper, commands, callback);
};

// helper for creating js file with content as default export
let _createFileHelper = ({ filePath, fileID, content }, callback) => {
  let command =
    "createIntegrationTestFile " +
    filePath +
    " " +
    fileID +
    ' "' +
    content +
    '"';
  execute(command, err => {
    if (err) {
      console.error(err);
      callback(err);
    }
    callback();
  });
};

module.exports = {
  copyTests,
  createApp,
  createMappingFile
};
