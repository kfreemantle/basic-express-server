'use strict';

module.exports = (error, request, response, next) => {
  response.status(500).send({
    error: 500,
    route: request.path,
    query: request.query,
    body: request.body,
    message: `Internal Server Error: ${error}`
  });
};