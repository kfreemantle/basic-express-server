'use strict';

// validator
// Checks the query string for a name property
// Sends the request through when valid, forces an error when not


const validator = (request, response, next) => {
  const name = request.query.name;

  if (!name) {
    next('Error: no name passed through');
  }
  next();
};

module.exports = validator;

