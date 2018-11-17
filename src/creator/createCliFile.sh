#!/bin/bash

# createCliFile.sh

fullFileName=$1
test=$2


# only create if does not already exist
if [[ ! -f $fullFileName ]]; then
	# create path and empty file
	echo $fullFileName
	mkdir -p "$filePath"
    > $fullFileName

    echo "$test" >> $fullFileName
    npm run pretty $fullFileName
fi
