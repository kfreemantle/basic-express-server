'use strict';


// per Jacob we do this at the main entry point to the app, which is typically index.js.  We have access to the properties in .env
require('dotenv').config();


// importing/requiring both the server.js file and accessing PORT from the .env file so it's accessible to other elements
const server = require('./src/server');
const PORT = process.env.PORT;

server.start(PORT);
// this is server start line