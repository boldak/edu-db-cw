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
