'use strict';

const express = require('express');
const dataSetController = require('../controllers/dataSetController');
const dataFileController = require('../controllers/dataFileController');

const router = express.Router();

router
  .route('/')
  .get(dataSetController.getAllDataSets)
  .post(dataSetController.createDataSet);

router.route('/dataFiles').get(dataFileController.getAllDataFiles);

router
  .route('/:id')
  .get(dataSetController.getDataSet)
  .patch(dataSetController.updateDataSet)
  .delete(dataSetController.deleteDataSet);

router
  .route('/:id/DataFiles')
  .get(dataFileController.getAllDataFilesInDataSet)
  .post(dataFileController.createDataFile);

router
  .route('/:id/DataFiles/:fileId')
  .get(dataFileController.getDataFile)
  .patch(dataFileController.updateDataFile)
  .delete(dataFileController.deleteDataFile);

module.exports = router;
