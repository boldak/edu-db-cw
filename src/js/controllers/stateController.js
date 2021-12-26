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
