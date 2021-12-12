const DataTypes = require('sequelize');
const db = require('../lib/db');

const User = db.define('user', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  }
}, {
  db,
  timestamps: false,
  freezeTableName: true,
});

module.exports = User;