#!/usr/bin/env node
"use strict";

const logger = require("./utils/logger");

// parsers
const swaggerParser = require("./parser/parseSwagger");
const argParser = require("./parser/argParser");

// creators
const createReactApp = require("./creator/createReactApp");

// generators
const generateTests = require("./generator/generateTests");

/**
 * created by David Goldstein on 8/24/2018
 * entry point for creating integration tests
 **/

var args = argParser.createParser().parseArgs();
var swaggerAPI;

// parse in files and validate swagger
swaggerParser.parseSwagger(args.swagger, ({ err, api }) => {
  logger.logAndExitOnError("Loaded swagger API", err);
  swaggerAPI = api;
  // on success create react app
  generateTestsFromSwagger();
});

// generate tests from template files
let generateTestsFromSwagger = () => {
  generateTests.generateAll(
    swaggerAPI,
    args.out,
    args.endpoint,
    ({ err, tests }) => {
      console.log(JSON.stringify(tests, null, 2));
      logger.logAndExitOnError("Generated tests from Swagger API", err);
      // success, tests were successfully generated!!
      createApp(tests);
    }
  );
};

// create react app project locally
let createApp = tests => {
  createReactApp.createReactApp(args.out, tests, ({ err }) => {
    logger.logAndExitOnError("Created app with tests", err);
    // on success generate tests
    generateTests();
  });
};

// generate main app.js file

// create package.json and dockerfile
