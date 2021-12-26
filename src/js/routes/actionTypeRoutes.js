'use strict';

const actionTypeController = require('../controllers/actionTypeController');

const setActionTypeRoutes = (fastify, options, done) => {
  fastify
    .get('/', actionTypeController.getAllActionTypes)
    .post('/', actionTypeController.createActionType)
    .get('/:id', actionTypeController.getActionType)
    .delete('/:id', actionTypeController.deleteActionType)
    .patch('/:id', actionTypeController.updateActionType);

  done();
};

module.exports = setActionTypeRoutes;
