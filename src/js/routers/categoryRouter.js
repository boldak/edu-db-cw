const Router = require('express').Router();
const {
    createCat,
    deleteCat,
    getCat
} = require('../services/category.js');

Router.route('/')
    .get(getCat)
    .post(createCat);

Router.route('/:id')
    .delete(deleteCat);


module.exports = Router;