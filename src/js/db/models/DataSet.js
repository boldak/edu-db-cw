const DataTypes = require('sequelize');
const db = require('../db');

const DataSet = db.define(
  'dataSet',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    category: {
      type: DataTypes.INTEGER,
    },
  },
  {
    db,
    freezeTableName: true,
  }
);

module.exports = DataSet;
