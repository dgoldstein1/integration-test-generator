#!/bin/bash

# create_symbolic_links.sh

# creates symbolic links for required scripts to be used
# system wide

# createIntegrationTestApp
ln -f ./src/creator/createApp.sh /usr/local/bin/createIntegrationTestApp

# createIntegrationTestFile
ln -f ./src/creator/createTestFile.sh /usr/local/bin/createIntegrationTestFile

# create cli integration test file
ln -f ./src/creator/createCliFile.sh /usr/local/bin/createCliFile

