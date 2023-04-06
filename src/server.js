'use strict';

// express invocation
const express = require('express');
const app = express();  // singleton.  there's only one server tied to app.  

// error handler declarations
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');
const PORT = process.env.PORT || 3002;

// app.use(cors());


// calls the logger component to make it accessible in server.js
app.use(logger);
app.use('*', error404);
app.use(error500);

// server GET request, looking for any OK response from the server
app.get('/', (request, response, next) => {

const serverUpMessage = 'Server is live!';

response.status(200).send(serverUpMessage);
});

app.get('/person', logger, validator, (request, response) => {

  const person = {name: request.query.name};
  response.status(200).json(person);
});

app.use('*', error404);
app.use(error500);

const start = () => {
  app.listen(PORT, () => console.log('Server is running'));
};

module.exports = { start, app };


