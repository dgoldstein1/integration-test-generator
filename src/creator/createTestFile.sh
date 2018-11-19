#!/bin/bash

# createTestFile.sh
filePath=$1
fileName=$2
testFunction=$3
header=$4
fullFileName="$filePath/$fileName.js"

if [[ ! -f $fullFileName ]]; then
	echo $fullFileName
	mkdir -p "$filePath"
    > $fullFileName
    echo "" >> $fullFileName

    echo "// replace code here" >> $fullFileName
    echo $header >> $fullFileName

    echo "// method run during testing" >> $fullFileName
    echo "let $fileName = $testFunction" >> $fullFileName

    echo "// footer, configured this way for testing" >> $fullFileName
    echo "export {$fileName, method, requestBody, expectedOutput, path}" >> $fullFileName
    cd $filePath && npm run pretty $fileName
fi

