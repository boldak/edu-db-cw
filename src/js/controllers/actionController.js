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
