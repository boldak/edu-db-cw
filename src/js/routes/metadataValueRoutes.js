'use strict';

const dataValueController = require('../controllers/metadataValueController');

const setDataValuesRoutes = (fastify, options, done) => {
  fastify
    .get('/', dataValueController.getAllMetadataValues)
    .post('/', dataValueController.createMetadataValue)

    .get('/:id', dataValueController.getMetadataValue)
    .patch('/:id', dataValueController.updateMetadataValue)
    .delete('/:id', dataValueController.deleteMetadataValue);

  done();
};

module.exports = setDataValuesRoutes;
