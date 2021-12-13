const Router = require('express').Router();
const {postLogin, postReg} = require('../services/auth.js');

Router.post('/login', postLogin);
Router.post('/reg', postReg);

module.exports = Router;