'use strict';

const typeController = require('../controllers/typeController');

const setTypeRoutes = (fastify, options, done) => {
  fastify
    .get('/', typeController.getAllTypes)
    .post('/', typeController.createType)

    .get('/:id', typeController.getType)
    .delete('/:id', typeController.deleteType)
    .patch('/:id', typeController.updateType);

  done();
};

module.exports = setTypeRoutes;
