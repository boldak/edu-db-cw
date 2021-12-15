const DataTypes = require('sequelize');
const db = require('../db');

const Grant = db.define(
  'grant',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
    },
    actionType: {
      type: DataTypes.INTEGER,
      references: {
        model: 'actionType',
        key: 'id',
      },
    },
    dataSet: {
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

module.exports = Grant;
