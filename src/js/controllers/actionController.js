'use strict';

const Action = require('../db/models/Action');

exports.getAllActions = async (req, reply) => {
  try {
    const allActions = await Action.findAll();

    if (!allActions.length) throw new Error('No items (action) found');

    reply.status(200).send({
      status: 'success',
      results: allActions.length,
      data: {
        allActions,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAction = async (req, reply) => {
  try {
    const newAction = await Action.create(req.body);

    if (!newAction) throw new Error('Failed to create a new action');

    reply.status(201).send({
      status: 'success',
      data: {
        newAction,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};
