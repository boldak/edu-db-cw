'use strict';

const Fastify = require('fastify');

// const dataSetRouter = require('./routes/dataSetsRoutes');

const fastify = Fastify({
  logger: true,
});

// app.use(express.json());

// app.use('/api/v1/dataSets', dataSetRouter);

module.exports = fastify;
