const DataTypes = require('sequelize');
const db = require('../lib/db');

const MetaDataKey = db.define('metaDataKey', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  key: {
    type: DataTypes.STRING(255)
  },
  description: {
    type: DataTypes.STRING(511)
  },
  metaDataKey: {
    type: DataTypes.INTEGER,
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

module.exports = MetaDataKey;