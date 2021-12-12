const DataTypes = require('sequelize');
const db = require('../lib/db');

const DataSet = db.define('dataSet', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncremenFt: true,
    primaryKey: true,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  category: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    }
  },
}, {
  db,
  freezeTableName: true,
});

module.exports = DataSet;