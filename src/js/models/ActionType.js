const DataTypes = require('sequelize');
const db = require('../lib/db');

const ActionType = db.define('actionType', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255)
  },
  description: {
    type: DataTypes.STRING(255)
  },
}, {
  db,
  timestamps: false,
  freezeTableName: true,
});

module.exports = ActionType;