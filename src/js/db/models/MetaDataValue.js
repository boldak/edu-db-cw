const DataTypes = require('sequelize');
const db = require('../db');

const MetaDataValue = db.define(
  'metaDataValue',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(255),
    },
    metaDataKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dataSet: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.INTEGER,
    },
    dataFile: {
      type: DataTypes.INTEGER,
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = MetaDataValue;
