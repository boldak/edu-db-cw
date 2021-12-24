'use strict';

const DataTypes = require('sequelize');
const db = require('../db');

const Action = db.define(
  'action',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    at: {
      type: DataTypes.DATE,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    actionType: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grant: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Action;
