'use strict';

const stateController = require('../controllers/stateController');

const setStateRoutes = (fastify, options, done) => {
  fastify
    .get('/', stateController.getAllStates)
    .post('/', stateController.createState)

    .get('/:id', stateController.getState)
    .delete('/:id', stateController.deleteState)
    .patch('/:id', stateController.updateState);

  done();
};

module.exports = setStateRoutes;
