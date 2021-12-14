const supertest = require('supertest');
const { app, server } = require('../src/index.js');

const api = supertest(app);

module.exports = {
  server,
  api
}