'use strict';

const Fastify = require('fastify');
const {
  availableForRouter,
  categoryRouter,
  dataSetRouter,
  metadataKeyRouter,
  typeRouter,
  metadataValueRouter,
} = require('./routes');

const app = Fastify({
  logger: true,
});

app.register(dataSetRouter, { prefix: '/api/v1/dataSets' });
app.register(categoryRouter, { prefix: '/api/v1/categories' });
app.register(availableForRouter, { prefix: '/api/v1/availableFor' });
app.register(metadataKeyRouter, { prefix: '/api/v1/metadataKey' });
app.register(metadataValueRouter, { prefix: '/api/v1/metadataValue' });
app.register(typeRouter, { prefix: '/api/v1/type' });

module.exports = app;
