const DataTypes = require('sequelize');
const db = require('../lib/db');

const Action = db.define('action', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  at: {
    type: DataTypes.DATE,
  },
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'state',
      key: 'id',
    }
  },
  actionType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'actionType',
      key: 'id',
    }
  },
  grant: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'grant',
      key: 'id',
    }
  },
}, {
  db,
  timestamps: false,
  freezeTableName: true,
});

module.exports = Action;