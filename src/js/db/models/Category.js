'use strict';

const DataTypes = require('sequelize');
const db = require('../db');

const Category = db.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Category;
