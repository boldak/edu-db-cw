import Sequelize from 'sequelize';
import { sequelize } from '../config/db.js';

const Action = sequelize.define("action", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  planedat: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  actedat: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  request: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

export {Action};