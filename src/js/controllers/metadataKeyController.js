'use strict';

const MetadataKey = require('../db/models/MetaDataKey');

exports.getAllMetadataKeys = async (req, reply) => {
  try {
    const metadataKeys = await MetadataKey.findAll();
    reply.status(200).send({
      status: 'success',
      results: metadataKeys.length,
      data: {
        metadataKeys,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getMetadataKey = async (req, reply) => {
  try {
    const { id } = req.params;
    const metadataKey = await MetadataKey.findOne({ where: { id } });
    reply.status(200).send({
      status: 'success',
      data: { metadataKey },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createMetadataKey = async (req, reply) => {
  try {
    const newMetadataKey = await MetadataKey.create(req.body);
    reply.status(201).send({
      status: 'success',
      data: { newMetadataKey },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteMetadataKey = async (req, reply) => {};
exports.updateMetadataKey = async (req, reply) => {};
