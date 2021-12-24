'use strict';

const availableForController = require('../controllers/AvailableForController');

const setAvailableForRoutes = (fastify, options, done) => {
  fastify
    .get('/', availableForController.getAllAvailableFor)
    .post('/', availableForController.createAvailableFor)

    .get('/:id', availableForController.getAvailableFor)
    .delete('/:id', availableForController.deleteAvailableFor)
    .patch('/:id', availableForController.updateAvailableFor);

  done();
};

module.exports = setAvailableForRoutes;
