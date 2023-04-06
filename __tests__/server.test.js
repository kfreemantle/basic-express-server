'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Fake API Server', () => {

  test('Test for a bad route', async () => {
    const response = await mockRequest.get('/someBadRoute');

    expect(response.status).toEqual(404);
  });

  test('Test for no name entered', async () => {
    const response = await mockRequest.get('/person?name=');

    expect(response.status).toEqual(500);
 
  });

  test('Test for regular name provided as string', async () => {
    const response = await mockRequest.get('/person?name=kyle');

    expect(response.status).toEqual(200);

  });

  test('Test for route with query parameter', async () => {
    const response = await mockRequest.get('/person').query({name: 'Steve'});

    expect(response.body.person).toEqual(mockRequest.body.person);
  });

});
