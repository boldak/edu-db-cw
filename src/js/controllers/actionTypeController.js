'use strict';

const ActionType = require('../db/models/MetaDataKey');

exports.getAllActionTypes = async (req, reply) => {
  try {
    const ActionTypes = await ActionType.findAll();
    reply.status(200).send({
      status: 'success',
      results: ActionTypes.length,
      data: {
        ActionTypes,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};
