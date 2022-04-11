#!/usr/bin/env ./node_modules/.bin/babel-node

import app from '../server'

app.listen(3009, function(){
    console.log('Listening on port 3009');
});