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

exports.createMetadataKey = async (req, reply) => {};
exports.getMetadataKey = async (req, reply) => {};
exports.deleteMetadataKey = async (req, reply) => {};
exports.updateMetadataKey = async (req, reply) => {};
