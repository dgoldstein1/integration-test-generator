// argParser.js

var ArgumentParser = require("argparse").ArgumentParser;

/**
 * helper for parsing in args
 **/
let createParser = function(parser) {
  // set default
  var parser = new ArgumentParser({
    swagger: "",
    out: process.cwd() + "/integrationtests",
    endpoint: "",
    npmPackageName: ""
  });

  parser.addArgument("-swagger", {
    required: true,
    help: "full path of the swagger json file"
  });
  parser.addArgument("-out", {
    required: false,
    help: "location where integration tests will be created"
  });
  parser.addArgument("-endpoint", {
    required: true,
    help: "endpoint where your service is running (root to make requests to)"
  });
  parser.addArgument("-npmPackageName", {
    required: false,
    help: "name of package to be published to npm"
  });
  parser.addArgument("-generateOnly", {
    required: false,
    help: "only generate new test files without creating new app"
  });

  return parser;
};

module.exports = {
  createParser
};
