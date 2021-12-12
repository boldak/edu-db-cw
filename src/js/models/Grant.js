const DataTypes = require('sequelize');
const db = require('../lib/db');

const Grant = db.define('grant', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    }
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
  dataSet: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'dataSet',
      key: 'id',
    }
  },
}, {
  db,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Grant;