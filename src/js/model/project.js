import Sequelize from 'sequelize';
import { sequelize } from '../config/db.js';
import { Task } from './task.js';
import { User } from './user.js';

const Project = sequelize.define("projects", {
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
},
{
  timestamps: false,
});

Project.hasMany(Task);
Project.hasMany(User);

export {Project};