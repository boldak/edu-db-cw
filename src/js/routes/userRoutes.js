'use strict';

const userController = require('../controllers/userController');

const setUserRoutes = (fastify, options, done) => {
  fastify
    .get('/', userController.getAllUsers)
    .post('/', userController.createUser)

    .get('/:id', userController.getUser)
    .delete('/:id', userController.deleteUser)
    .patch('/:id', userController.updateUser);

  done();
};

module.exports = setUserRoutes;
