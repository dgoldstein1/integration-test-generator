#!/bin/bash

# createTestFile.sh
filePath=$1
fileName=$2
testFunction=$3

if [[ ! -f "$filePath/$fileName" ]]; then
	echo "$filePath/$fileName"
	mkdir -p "$filePath"
    > "$filePath/$fileName"
    echo "import api from '../api/api'" >> "$filePath/$fileName"
    echo "import endpoint from '../definitions/endpoint'" >> "$filePath/$fileName"
    echo "" >> "$filePath/$fileName"
    echo "export default $testFunction" >> "$filePath/$fileName"
    prettier --write "$filePath/$fileName"
fi

