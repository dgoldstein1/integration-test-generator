#!/bin/bash

# createTestFile.sh
filePath=$1
fileName=$2
testFunction=$3
fullFileName="$filePath/$fileName.js"

if [[ ! -f $fullFileName ]]; then
	echo $fullFileName
	mkdir -p "$filePath"
    > $fullFileName
    echo "import api from '../api/api'" >> $fullFileName
    echo "import endpoint from '../definitions/endpoint'" >> $fullFileName
    echo "import _ from 'lodash'" >> $fullFileName
    echo "" >> $fullFileName
    echo "export default $testFunction" >> $fullFileName
    npm run pretty $fullFileName
fi

