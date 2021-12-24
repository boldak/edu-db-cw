'use strict';

const DataTypes = require('sequelize');
const db = require('../db');

const MetaDataKey = db.define(
  'metaDataKey',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    key: {
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING(511),
    },
    metaDataKey: {
      type: DataTypes.INTEGER,
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = MetaDataKey;
