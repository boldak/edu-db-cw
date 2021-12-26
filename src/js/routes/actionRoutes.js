'use strict';

const actionController = require('../controllers/actionController');

const setActionRoutes = (fastify, options, done) => {
  fastify
    .get('/', actionController.getAllActions)
    .post('/', actionController.createAction)

    .get('/:id', actionController.getAction)
    .delete('/:id', actionController.deleteAction)
    .patch('/:id', actionController.updateAction);

  done();
};

module.exports = setActionRoutes;
