#!/bin/bash

# createTestFile.sh
filePath=$1
fileName=$2
testFunction=$3
header=$4
footer=$5
fullFileName="$filePath/$fileName.js"

if [[ ! -f $fullFileName ]]; then
	echo $fullFileName
	mkdir -p "$filePath"
    > $fullFileName
    echo "" >> $fullFileName
    echo $header >> $fullFileName
    echo "let $fileName = $testFunction" >> $fullFileName
    echo $footer >> $fullFileName
    npm run pretty $fullFileName
fi

