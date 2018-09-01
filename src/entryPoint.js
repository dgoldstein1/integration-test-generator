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
  // createApp();
  let generateTestsSuccess = generateTests.generateAll(
    swaggerAPI,
    args.out,
    args.baseEndpoint
  );
});

// // create react app project locally
// let createApp = () => {
//   createReactApp.createReactApp(args.out, ({ err }) => {
//     logger.logAndExitOnError("Create react app", err);
//     // on success generate tests
//     generateTests()
//   });
// };

// // generate tests from template files
// let generateTets = () => {
//   let generateTests = generateTests.generateTests(args.swagger, args.out)
// }

// generate main app.js file

// create package.json and dockerfile
