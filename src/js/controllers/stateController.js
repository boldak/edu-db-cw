'use strict';

const State = require('../db/models/State');

exports.getAllStates = async (req, reply) => {
  try {
    const allStates = await State.findAll();

    if (!allStates.length) throw new Error('No items (state) found');

    reply.status(200).send({
      status: 'success',
      results: allStates.length,
      data: {
        allStates,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createState = async (req, reply) => {
  try {
    const newState = await State.create(req.body);

    if (!newState) throw new Error('Failed to create a new state');

    reply.status(201).send({
      status: 'success',
      data: {
        newState,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getState = async (req, reply) => {
  try {
    const { id } = req.params;
    const state = await State.findOne({
      where: { id },
    });

    if (!state) throw new Error('State with the specified ID does not exists');

    reply.status(200).send({
      status: 'success',
      data: {
        state,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateState = async (req, reply) => {
  try {
    const { id } = req.params;
    await State.update(req.body, {
      where: { id },
    });

    const updatedState = await State.findOne({
      where: { id },
    });

    if (!updatedState)
      throw new Error('State with the specified ID does not exists');

    reply.status(200).send({
      status: 'success',
      data: {
        updatedState,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteState = async (req, reply) => {
  try {
    const { id } = req.params;
    const state = await State.findOne({
      where: { id },
    });

    if (!state) throw new Error('State with the specified ID does not exists');

    await State.destroy({
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
