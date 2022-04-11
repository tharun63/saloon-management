#!/usr/bin/env ./node_modules/.bin/babel-node

import app from '../server'
app.listen(process.env.PORT, function(){
    console.log(`Listening on port ${port}`);
});
