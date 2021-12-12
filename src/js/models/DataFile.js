const DataTypes = require('sequelize');
const db = require('../lib/db');

const DataFile = db.define('dataFile', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  dataSet: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'dataSet',
      key: 'id',
    }
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE
  },
}, {
  db,
  freezeTableName: true,
});

module.exports = DataFile;