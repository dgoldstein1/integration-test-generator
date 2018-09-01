#!/bin/bash

# createTestFile.sh
filePath=$1
fileName=$2
testFunction=$3

if [[ ! -e "$filePath/$fileName" ]]; then
	mkdir -p "$filePath"
    touch "$filePath/$fileName"
    echo "export deafult { $testFunction }" >> "$filePath/$fileName"
fi