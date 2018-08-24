#!/usr/bin/env node
"use strict";

const logger = require("./utils/logger");

// parsers
const swaggerParser = require("./parser/parseSwagger");
const argParser = require("./parser/argParser");

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
});

// create react app project locally

// generate tests from template files

// generate main app.js file

// create package.json and dockerfile
