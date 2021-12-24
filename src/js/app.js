'use strict';

const Fastify = require('fastify');
const dataSetRouter = require('./routes/dataSetsRoutes');

const app = Fastify({
  logger: true,
});

app.register(dataSetRouter, { prefix: '/api/v1/dataSets' });

module.exports = app;
