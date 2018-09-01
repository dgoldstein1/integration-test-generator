#!/bin/bash

# createTestFile.sh
filePath=$1
fileName=$2
testFunction=$3
force=$4

if [! -e "$filePath/$fileName"] ||  [ $force == "true" ] ; then
    echo "$filePath/$fileName"
	mkdir -p "$filePath"
    > "$filePath/$fileName"
    echo "export deafult { $testFunction }" >> "$filePath/$fileName"
fi