#!/bin/bash

# create_symbolic_links.sh

# creates symbolic links for required scripts to be used
# system wide

# createIntegrationTestApp
ln -s -f ./src/creator/createApp.sh /usr/local/bin/createIntegrationTestApp

# createIntegrationTestFile
ln -s -f ./src/creator/createTestFile.sh /usr/local/bin/createIntegrationTestFile