const DataTypes = require('sequelize');
const db = require('../lib/db');

const AvailableFor = db.define('availableFor', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'type',
      key: 'id',
    }
  },
  metaDataKey: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'metaDataKey',
      key: 'id',
    }
  }
}, {
  db,
  timestamps: false,
  freezeTableName: true,
});

module.exports = AvailableFor;