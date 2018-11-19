#!/bin/bash

# createCliFile.sh
filePath=$1
fileName=$2
testFunction=$3
fullFileName="$filePath/$fileName"


# only create if does not already exist
if [[ ! -f $fullFileName ]]; then
	# create path and empty file
	echo $fullFileName
	mkdir -p "$filePath"
    > $fullFileName

    echo "$testFunction" >> $fullFileName
    cd $filePath && npm run pretty $fileName
fi
