#!/bin/bash

# createTestFile.sh
filePath=$1
fileName=$2
testFunction=$3

if [[ ! -f "$filePath/$fileName" ]]; then
	echo "$filePath/$fileName"
	mkdir -p "$filePath"
    > "$filePath/$fileName"
    echo "export deafult { $testFunction }" >> "$filePath/$fileName"
fi

