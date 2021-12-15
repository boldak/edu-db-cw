const DataTypes = require('sequelize');
const db = require('../db');

const Role = db.define(
  'role',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Role;
