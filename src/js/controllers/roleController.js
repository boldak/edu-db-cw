'use strict';

const Role = require('../db/models/Role');

exports.getAllRoles = async (req, reply) => {
  try {
    const roles = await Role.findAll();
    reply.status(200).send({
      status: 'success',
      results: roles.length,
      data: {
        roles,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getRole = async (req, reply) => {
  try {
    const { id } = req.params;
    const role = await Role.findOne({ where: { id } });

    if (!role) throw new Error(`There's no role with an id value of ${id}`);

    reply.status(200).send({
      status: 'success',
      data: { role },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createRole = async (req, reply) => {
  try {
    const newRole = await Role.create(req.body);
    reply.status(201).send({
      status: 'success',
      data: { newRole },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteRole = async (req, reply) => {
  try {
    const { id } = req.params;
    const role = await Role.findOne({ where: { id } });

    if (!role) throw new Error(`Can't delete a role with an id value of ${id}`);

    await Role.destroy({ where: { id } });

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

exports.updateRole = async (req, reply) => {
  try {
    const { id } = req.params;
    const role = await Role.findOne({ where: { id } });

    if (!role) throw new Error(`There's no role with an id value of ${id}`);

    const [affectedRowsCount] = await Role.update(req.body, {
      where: { id },
    });

    if (!affectedRowsCount)
      throw new Error(`Role with an id value of ${id} hasn't been updated`);

    const updatedRole = await Role.findOne({ where: { id } });

    reply.status(200).send({
      status: 'success',
      data: {
        updatedRole,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};
