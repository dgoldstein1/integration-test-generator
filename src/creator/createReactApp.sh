#!/bin/bash

# createReactApp.sh
npm install -g create-react-app

# let's create the app
create-react-app $1

# set yourself as the owner of everything
chown -R $USER:$USER ./*

# cd into directory
cd $1

# install material-ui
npm install --save @material-ui/core
npm install --save @material-ui/icons