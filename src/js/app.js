'use strict';

const Fastify = require('fastify');
const availableForRouter = require('./routes/availableForRoutes');
const categoryRouter = require('./routes/categoriesRoutes');
const dataSetRouter = require('./routes/dataSetsRoutes');
const metadataKeyRouter = require('./routes/metadataKeyRoutes');

const app = Fastify({
  logger: true,
});

app.register(dataSetRouter, { prefix: '/api/v1/dataSets' });
app.register(categoryRouter, { prefix: '/api/v1/categories' });
app.register(availableForRouter, { prefix: '/api/v1/availableFor' });
app.register(metadataKeyRouter, { prefix: '/api/v1/metadataKey' });

module.exports = app;
