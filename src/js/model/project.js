import Sequelize from 'sequelize';
import { sequelize } from '../config/db.js';
import { Task } from './task.js';

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
});

Project.hasMany(Task);

export {Project};