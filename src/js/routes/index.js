'use strict';

const availableForRouter = require('./availableForRoutes');
const categoryRouter = require('./categoriesRoutes');
const dataSetRouter = require('./dataSetsRoutes');
const metadataKeyRouter = require('./metadataKeyRoutes');
const metadataValueRouter = require('./metadataValueRoutes');
const typeRouter = require('./typeRoutes');

module.exports = {
  availableForRouter,
  categoryRouter,
  dataSetRouter,
  metadataKeyRouter,
  metadataValueRouter,
  typeRouter,
};
