#!/usr/bin/env node
"use strict";

const logger = require("./utils/logger");

// parsers
const swaggerParser = require("./parser/parseSwagger");
const argParser = require("./parser/argParser");

// creators
const createApp = require("./creator/createApp");

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
      logger.logAndExitOnError("Generated tests from Swagger API", err);
      // success, tests were successfully generated!!
      createUI(tests);
    }
  );
};

// create react app project locally
let createUI = tests => {
  createApp.copyTests(args.out, tests, err => {
    logger.logAndExitOnError("Created app with tests", err);
  });
};

// generate main app.js file

// create package.json and dockerfile
