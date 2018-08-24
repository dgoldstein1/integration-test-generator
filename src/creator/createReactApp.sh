#!/bin/bash

# createReactApp.sh
npm install -g create-react-app

# let's create the app
create-react-app $1

# set yourself as the owner of everything
chown -R $USER:$USER ./*