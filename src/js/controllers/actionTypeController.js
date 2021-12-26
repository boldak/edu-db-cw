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

exports.getActionType = async (req, reply) => {
  try {
    const { id } = req.params;
    const actionType = await ActionType.findOne({ where: { id } });

    if (!actionType)
      throw new Error(`There's no action type with an id value of ${id}`);

    reply.status(200).send({
      status: 'success',
      data: { actionType },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createActionType = async (req, reply) => {
  try {
    const newActionType = await ActionType.create(req.body);
    reply.status(201).send({
      status: 'success',
      data: { newActionType },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteActionType = async (req, reply) => {
  try {
    const { id } = req.params;
    const actionType = await ActionType.findOne({ where: { id } });

    if (!actionType)
      throw new Error(`Can't delete an action type with an id value of ${id}`);

    await ActionType.destroy({ where: { id } });

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

exports.updateActionType = async (req, reply) => {
  try {
    const { id } = req.params;
    const actionType = await ActionType.findOne({ where: { id } });

    if (!actionType)
      throw new Error(`There's no action type with an id value of ${id}`);

    const [affectedRowsCount] = await ActionType.update(req.body, {
      where: { id },
    });

    if (!affectedRowsCount)
      throw new Error(
        `An action type with an id value of ${id} hasn't been updated`
      );

    const updatedActionType = await ActionType.findOne({ where: { id } });

    reply.status(200).send({
      status: 'success',
      data: {
        updatedActionType,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};
