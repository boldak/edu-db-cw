const DataTypes = require('sequelize');
const db = require('../lib/db');

const Category = db.define('category', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
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
  timestamps: false,
  freezeTableName: true,
});

module.exports = Category;