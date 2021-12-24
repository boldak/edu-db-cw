'use strict';

const DataTypes = require('sequelize');
const db = require('../db');

const AvailableAction = db.define(
  'availableAction',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'role',
      //   key: 'id',
      // }
    },
    actionType: {
      type: DataTypes.INTEGER,
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = AvailableAction;
