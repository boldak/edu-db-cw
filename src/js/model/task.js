import Sequelize from 'sequelize';
import { sequelize } from '../config/db.js';
import { Action } from './action.js';

const Task = sequelize.define("tasks", {
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
  deadline: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

Task.hasMany(Action);

export {Task};