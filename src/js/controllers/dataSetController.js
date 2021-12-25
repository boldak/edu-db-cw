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
      message: err,
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

    if (!dataSet) throw 'Dataset with the specified ID does not exists';

    reply.status(200).send({
      status: 'success',
      data: {
        dataSet,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err,
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
      message: err,
    });
  }
};

exports.updateDataSet = async (req, reply) => {
  try {
    const { id } = req.params;
    const [updated] = await DataSet.update(req.body, {
      where: { id },
    });

    if (!updated) throw 'Dataset with the specified ID does not exists';

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
      message: err,
    });
  }
};

exports.deleteDataSet = async (req, reply) => {
  const id = req.params.id;

  try {
    const dataSet = await DataSet.findOne({
      where: { id },
    });

    if (!dataSet) throw 'Dataset with the specified ID does not exists';

    await DataSet.destroy({
      where: {
        id: req.params.id,
      },
    });

    reply.status(200).send({
      status: 'success',
      data: null,
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};
