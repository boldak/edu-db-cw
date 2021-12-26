'use strict';

const roleController = require('../controllers/roleController');

const setRoleRoutes = (fastify, options, done) => {
  fastify
    .get('/', roleController.getAllRoles)
    .post('/', roleController.createRole)
    .get('/:id', roleController.getRole)
    .delete('/:id', roleController.deleteRole)
    .patch('/:id', roleController.updateRole);

  done();
};

module.exports = setRoleRoutes;
