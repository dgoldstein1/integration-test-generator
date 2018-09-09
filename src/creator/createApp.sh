#!/bin/bash

# logs success / failure of last command
# param name of command
log_success_or_failure() {
    if [ $? -eq 0 ]
    then
        echo "$(tput setab 2 )--- SUCCESS --- ${1} $(tput sgr0)"
    else
        echo "$(tput setab 1 )--- FAILURE --- ${1} $(tput sgr0)"
       	exit 1
    fi
}

mkdir -p $1 && cd $1
log_success_or_failure "Created dir $1"

# clone repo
git clone https://github.com/dgoldstein1/swagger-integration-test-UI.git .
log_success_or_failure "cloning repo"

# install
npm install
log_success_or_failure "install dependencies"

# set yourself as the owner of everything
chown -R $USER:$USER ./*
log_success_or_failure "changing owernship permissions"
