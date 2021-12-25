'use strict';

const DataFile = require('../db/models/DataFile');

exports.getAllDataFiles = async (req, reply) => {
  try {
    const files = await DataFile.findAll();

    reply.status(200).send({
      status: 'success',
      results: files.length,
      data: {
        files,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAllDataFilesInDataSet = async (req, reply) => {
  try {
    const files = await DataFile.findAll({
      where: {
        dataSet: req.params.id,
      },
    });

    reply.status(200).send({
      status: 'success',
      results: files.length,
      data: {
        files,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getDataFile = async (req, reply) => {
  try {
    const file = await DataFile.findOne({
      where: {
        id: req.params.fileId,
        dataSet: req.params.id,
      },
    });

    if (!file) {
      throw new Error(
        'Datafile with the specified ID was not found in this Dataset'
      );
    }

    reply.status(200).send({
      status: 'success',
      data: {
        file,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createDataFile = async (req, reply) => {
  try {
    const dataSet = +req.params.id;
    const newFile = await DataFile.create({ dataSet });

    reply.status(201).send({
      status: 'success',
      data: {
        newFile,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateDataFile = async (req, reply) => {
  try {
    const { id, fileId } = req.params;
    const [updated] = await DataFile.update(req.body, {
      where: { id: +fileId, dataSet: +id },
    });

    const updatedFile = await DataFile.findOne({
      where: { id: fileId },
    });

    if (!updated)
      throw new Error(
        'Datafile with the specified ID was not found in this Dataset'
      );

    reply.status(200).send({
      status: 'success',
      data: {
        updatedFile,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteDataFile = async (req, reply) => {
  try {
    const { id, fileId } = req.params;
    const deleted = await DataFile.destroy({
      where: {
        id: fileId,
        dataSet: id,
      },
    });
    if (!deleted)
      throw new Error(
        'Datafile with the specified ID was not found in this Dataset'
      );

    reply.status(200).send({
      status: 'success',
      data: null,
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};
