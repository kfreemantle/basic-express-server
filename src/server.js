'use strict';

// express invocation
const express = require('express');

// error handler declarations
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

const app = express(); 


// calls the logger component to make it accessible in server.js
app.use(logger);

// server GET request, looking for any OK response from the server
app.get('/', (request, response, next) => {
const serverUpMessage = 'Server is live!';
response.status(200).send(serverUpMessage);
});

