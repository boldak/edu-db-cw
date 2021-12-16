import Sequelize from 'sequelize';

const sequelize = new Sequelize('database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

export { sequelize };