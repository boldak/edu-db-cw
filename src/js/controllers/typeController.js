'use strict';

const Type = require('../db/models/Type');

exports.getAllTypes = async (req, reply) => {
  try {
    const allTypes = await Type.findAll();

    if (!allTypes.length) throw new Error('No items (types) found');

    reply.status(200).send({
      status: 'success',
      results: allTypes.length,
      data: {
        allTypes,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createType = async (req, reply) => {
  try {
    const newType = await Type.create(req.body);

    if (!newType) throw new Error('Failed to create a new type');

    reply.status(201).send({
      status: 'success',
      data: {
        newType,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getType = async (req, reply) => {
  try {
    const { id } = req.params;
    const type = await Type.findOne({
      where: { id },
    });

    if (!type) throw new Error('Type with the specified ID does not exists');

    reply.status(200).send({
      status: 'success',
      data: {
        type,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateType = async (req, reply) => {
  try {
    const { id } = req.params;
    await Type.update(req.body, {
      where: { id },
    });

    const updatedType = await Type.findOne({
      where: { id },
    });

    if (!updatedType)
      throw new Error('Type with the specified ID does not exists');

    reply.status(200).send({
      status: 'success',
      data: {
        updatedType,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteType = async (req, reply) => {
  try {
    const { id } = req.params;
    const type = await Type.findOne({
      where: { id },
    });

    if (!type) throw new Error('Type with the specified ID does not exists');

    await Type.destroy({
      where: { id },
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
