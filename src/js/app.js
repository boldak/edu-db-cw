'use strict';

const Fastify = require('fastify');
const routers = require('./routes');

const registerRouters = require('./utils/registerRouters');

const PREFIX = 'api/v1';
const app = Fastify({
  logger: true,
});

registerRouters(app, routers, PREFIX);

module.exports = app;
