#!/usr/bin/env ./node_modules/.bin/babel-node
import app from '../src/server';
//import {} from 'dotenv/config'
const PORT = 3009
const port=process.env.PORT || 3009;
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});
