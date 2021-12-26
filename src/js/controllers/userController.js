'use strict';

const User = require('../db/models/User');

exports.getAllUsers = async (req, reply) => {
  try {
    const allUsers = await User.findAll();

    if (!allUsers.length) throw new Error('No items (user) found');

    reply.status(200).send({
      status: 'success',
      results: allUsers.length,
      data: {
        allUsers,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createUser = async (req, reply) => {
  try {
    const newUser = await User.create(req.body);

    if (!newUser) throw new Error('Failed to create a new user');

    reply.status(201).send({
      status: 'success',
      data: {
        newUser,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });

    if (!user) throw new Error('User with the specified ID does not exist');

    reply.status(200).send({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });

    if (!user) throw new Error('User with the specified ID does not exist');

    await User.update(req.body, {
      where: { id },
    });

    const updatedUser = await User.findOne({
      where: { id },
    });

    reply.status(200).send({
      status: 'success',
      data: {
        updatedUser,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};
