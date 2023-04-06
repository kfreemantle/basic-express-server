'use strict';

// logger
// Performs a console.log with the request method and path
// Import this into your server and set it up to run at the application level for all routes

const logger = (request, response, next) => {
  console.log(`Logging PATH and METHOD: ${request.path}, ${request.method}`);
  next();
};

module.exports = logger;
