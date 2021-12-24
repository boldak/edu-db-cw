'use strict';

const dataSetController = require('../controllers/dataSetController');
const dataFileController = require('../controllers/dataFileController');

const setDataSetsRoutes = (fastify, options, done) => {
  fastify
    .get('/', dataSetController.getAllDataSets)
    .post('/', dataSetController.createDataSet)

    .get('/dataFiles/', dataFileController.getAllDataFiles)

    .get('/:id', dataSetController.getDataSet)
    .patch('/:id', dataSetController.updateDataSet)
    .delete('/:id', dataSetController.deleteDataSet)

    .get('/:id/dataFiles/', dataFileController.getAllDataFilesInDataSet)
    .post('/:id/dataFiles/', dataFileController.createDataFile)

    .get('/:id/dataFiles/:fileId', dataFileController.getDataFile)
    .patch('/:id/dataFiles/:fileId', dataFileController.updateDataFile)
    .delete('/:id/dataFiles/:fileId', dataFileController.deleteDataFile);

  done();
};

module.exports = setDataSetsRoutes;
