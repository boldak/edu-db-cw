'use strict';

const DataTypes = require('sequelize');
const db = require('../db');

const Type = db.define(
  'type',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING(45),
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Type;
