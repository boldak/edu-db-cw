'use strict';

const AvailableFor = require('../db/models/AvailableFor');

exports.getAllAvailableFor = async (req, reply) => {
  try {
    const availableFor = await AvailableFor.findAll();

    reply.status(200).send({
      status: 'success',
      results: availableFor.length,
      data: {
        availableFor,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.createAvailableFor = async (req, res) => {
  try {
    const newAvailableFor = await AvailableFor.create(req.body);

    res.status(201).send({
      status: 'success',
      data: {
        newAvailableFor,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAvailableFor = async (req, res) => {
  try {
    const availableFor = await AvailableFor.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      status: 'success',
      data: {
        availableFor,
      },
    });
  } catch (err) {
    res.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateAvailableFor = async (req, res) => {
  try {
    await AvailableFor.update(req.body, {
      where: { id: req.params.id },
    });

    const updatedAvailableFor = await AvailableFor.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      status: 'success',
      data: {
        updatedAvailableFor,
      },
    });
  } catch (err) {
    res.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteAvailableFor = async (req, res) => {
  try {
    await AvailableFor.destroy({
      where: { id: req.params.id },
    });

    res.status(200).send({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).send({
      status: 'fail',
      message: err,
    });
  }
};
