const DataTypes = require('sequelize');
const db = require('../lib/db');

const AvailableAction = db.define('availableAction', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    references: {
      model: 'role',
      key: 'id',
    }
  },
  actionType: {
    type: DataTypes.INTEGER,
    references: {
      model: 'actionType',
      key: 'id',
    }
  },
}, {
  db,
  timestamps: false,
  freezeTableName: true,
});

module.exports = AvailableAction;
