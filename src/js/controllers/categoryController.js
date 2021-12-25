'use strict';

const Category = require('../db/models/Category');

exports.getAllCategories = async (req, reply) => {
  try {
    const categories = await Category.findAll();

    reply.status(200).send({
      status: 'success',
      results: categories.length,
      data: {
        categories,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getCategory = async (req, reply) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!category)
      throw new Error('Category with the specified ID does not exist');

    reply.status(200).send({
      status: 'success',
      data: {
        category,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createCategory = async (req, reply) => {
  try {
    const newCategory = await Category.create(req.body);

    reply.status(201).send({
      status: 'success',
      data: {
        newCategory,
      },
    });
  } catch (err) {
    reply.status(400).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateCategory = async (req, reply) => {
  try {
    const { id } = req.params;
    const [updated] = await Category.update(req.body, {
      where: { id },
    });

    if (!updated)
      throw new Error('Category with the specified ID does not exist');

    const updatedCategory = await Category.findOne({
      where: { id },
    });
    reply.status(200).send({
      status: 'success',
      data: {
        updatedCategory,
      },
    });
  } catch (err) {
    reply.status(404).send({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteCategory = async (req, reply) => {
  const id = +req.params.id;

  try {
    const category = await Category.findOne({
      where: { id },
    });

    if (!category)
      throw new Error('Category with the specified ID does not exist');

    await Category.destroy({
      where: {
        id,
      },
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
