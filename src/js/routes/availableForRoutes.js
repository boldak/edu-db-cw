'use strict';

const express = require('express');
const availableForController = require('../controllers/AvailableForController');
const availableForRouter = express.Router();

availableForRouter
  .route('/')
  .get(availableForController.getAllAvailableFor)
  .post(availableForController.createAvailableFor);

availableForRouter
  .route('/:id')
  .get(availableForController.getAvailableFor)
  .delete(availableForController.deleteAvailableFor)
  .patch(availableForController.updateAvailableFor);

module.exports = availableForRouter;
