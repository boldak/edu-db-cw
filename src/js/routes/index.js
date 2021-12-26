'use strict';

const availableForRouter = require('./availableForRoutes');
const categoriesRouter = require('./categoriesRoutes');
const dataSetsRouter = require('./dataSetsRoutes');
const metadataKeyRouter = require('./metadataKeyRoutes');
const metadataValueRouter = require('./metadataValueRoutes');
const typeRouter = require('./typeRoutes');
const stateRouter = require('./stateRoutes');

module.exports = {
  availableForRouter,
  categoriesRouter,
  dataSetsRouter,
  metadataKeyRouter,
  metadataValueRouter,
  typeRouter,
  stateRouter,
};
