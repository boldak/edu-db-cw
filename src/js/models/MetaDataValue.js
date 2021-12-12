const DataTypes = require('sequelize');
const db = require('../lib/db');

const MetaDataValue = db.define('metaDataValue', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING(255)
  },
  metaDataKey: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'metaDataKey',
      key: 'id',
    }
  },
  dataSet: {
    type: DataTypes.INTEGER,
    references: {
      model: 'dataSet',
      key: 'id',
    }
  },
  category: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    }
  },
  dataFile: {
    type: DataTypes.INTEGER,
    references: {
      model: 'dataFile',
      key: 'id',
    }
  },
}, {
  db,
  timestamps: false,
  freezeTableName: true,
});

module.exports = MetaDataValue;