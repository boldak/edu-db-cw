'use strict';

const MetaDataValue = require('../db/models/MetaDataValue');
exports.getAllMetadataValues = async (req, reply) => {
  try {
    const metadataValues = await MetaDataValue.findAll();

    reply.status(200).send({
      status: 'success',
      results: metadataValues.length,
      data: {
        metadataValues,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getMetadataValue = async (req, reply) => {
  try {
    const metadataValue = await MetaDataValue.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!metadataValue)
      throw new Error('MetadataValue with the specified ID does not exist');

    reply.status(200).send({
      status: 'success',
      data: {
        metadataValue,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createMetadataValue = async (req, reply) => {
  try {
    const newMetadataValue = await MetaDataValue.create(req.body);
    reply.status(201).send({
      status: 'success',
      data: {
        newMetadataValue,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateMetadataValue = async (req, reply) => {
  try {
    const { id } = req.params;
    const [updated] = await MetaDataValue.update(req.body, {
      where: { id },
    });

    if (!updated)
      throw new Error('MetadataValue with the specified ID does not exist');

    const updatedMetadataValue = await MetaDataValue.findOne({
      where: { id },
    });
    reply.status(200).send({
      status: 'success',
      data: {
        updatedMetadataValue,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteMetadataValue = async (req, reply) => {
  const id = req.params.id;

  try {
    const metadataValue = await MetaDataValue.findOne({
      where: { id },
    });

    if (!metadataValue)
      throw new Error('MetadataValue with the specified ID does not exist');

    await MetaDataValue.destroy({
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
