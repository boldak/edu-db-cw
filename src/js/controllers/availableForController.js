'use strict';

const AvailableFor = require('../db/models/AvailableFor');

exports.getAllAvailableFor = async (req, reply) => {
  try {
    const allAvailableFor = await AvailableFor.findAll();

    if (!allAvailableFor.length)
      throw new Error('No items (availableFor) found');

    reply.status(200).send({
      status: 'success',
      results: allAvailableFor.length,
      data: {
        allAvailableFor,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAvailableFor = async (req, reply) => {
  try {
    const newAvailableFor = await AvailableFor.create(req.body);

    if (!newAvailableFor)
      throw new Error('Failed to create a new availableFor');

    reply.status(201).send({
      status: 'success',
      data: {
        newAvailableFor,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAvailableFor = async (req, reply) => {
  try {
    const { id } = req.params;
    const availableFor = await AvailableFor.findOne({
      where: { id },
    });

    if (!availableFor)
      throw new Error('AvailableFor with the specified ID does not exists');

    reply.status(200).send({
      status: 'success',
      data: {
        availableFor,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateAvailableFor = async (req, reply) => {
  try {
    const { id } = req.params;
    await AvailableFor.update(req.body, {
      where: { id },
    });

    const updatedAvailableFor = await AvailableFor.findOne({
      where: { id },
    });

    if (!updatedAvailableFor)
      throw new Error('AvailableFor with the specified ID does not exists');

    reply.status(200).send({
      status: 'success',
      data: {
        updatedAvailableFor,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteAvailableFor = async (req, reply) => {
  try {
    const { id } = req.params;
    const availableFor = await AvailableFor.findOne({
      where: { id },
    });

    if (!availableFor)
      throw new Error('AvailableFor with the specified ID does not exists');

    await AvailableFor.destroy({
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
