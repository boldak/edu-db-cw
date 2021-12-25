'use strict';

const metadataKeyController = require('../controllers/metadataKeyController');

const setMetadataKeyRoutes = (fastify, options, done) => {
  fastify
    .get('/', metadataKeyController.getAllMetadataKeys)
    .post('/', metadataKeyController.createMetadataKey)
    .get('/:id', metadataKeyController.getMetadataKey)
    .delete('/:id', metadataKeyController.deleteMetadataKey)
    .patch('/:id', metadataKeyController.updateMetadataKey);

  done();
};

module.exports = setMetadataKeyRoutes;
