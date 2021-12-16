import Sequelize from 'sequelize';
import { sequelize } from '../config/db.js';
import { Task } from './task.js';

const Artifact = sequelize.define("artifacts", {
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
    allowNull: false,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

Artifact.hasMany(Task);

export {Artifact};