import Sequelize from 'sequelize';
import { sequelize } from '../config/db.js';
import { Action } from './action.js';
import { Project } from './project.js';

const User = sequelize.define("users", {
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
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  activationKey: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(Action);
User.hasMany(Project);

export {User};