require('dotenv').config();
const Sequelize = require('sequelize');

const seq = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = seq;