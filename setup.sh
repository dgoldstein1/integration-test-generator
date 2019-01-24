#!/bin/bash

# setup.sh

# creates symbolic links for required scripts to be used
# system wide

# createIntegrationTestApp
ln -f ./src/creator/createApp.sh /usr/local/bin/createIntegrationTestApp

# createIntegrationTestFile
ln -f ./src/creator/createTestFile.sh /usr/local/bin/createIntegrationTestFile

# create cli integration test file
ln -f ./src/creator/createCliFile.sh /usr/local/bin/createCliFile

# install dependencies
npm install

# run tests
npm test