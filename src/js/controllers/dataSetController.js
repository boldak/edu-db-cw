'use strict';

const DataSet = require('../db/models/DataSet');

exports.getAllDataSets = async (req, reply) => {
  try {
    const dataSets = await DataSet.findAll();

    reply.status(200).send({
      status: 'success',
      results: dataSets.length,
      data: {
        dataSets,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getDataSet = async (req, reply) => {
  try {
    const dataSet = await DataSet.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!dataSet)
      throw new Error('Dataset with the specified ID does not exist');

    reply.status(200).send({
      status: 'success',
      data: {
        dataSet,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createDataSet = async (req, reply) => {
  try {
    const newDataSet = await DataSet.create(req.body);
    reply.status(201).send({
      status: 'success',
      data: {
        newDataSet,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateDataSet = async (req, reply) => {
  try {
    const { id } = req.params;
    const [updated] = await DataSet.update(req.body, {
      where: { id },
    });

    if (!updated)
      throw new Error('Dataset with the specified ID does not exist');

    const updatedDataSet = await DataSet.findOne({
      where: { id },
    });
    reply.status(200).send({
      status: 'success',
      data: {
        updatedDataSet,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteDataSet = async (req, reply) => {
  const id = req.params.id;

  try {
    const dataSet = await DataSet.findOne({
      where: { id },
    });

    if (!dataSet)
      throw new Error('Dataset with the specified ID does not exist');

    await DataSet.destroy({
      where: {
        id,
      },
    });

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
