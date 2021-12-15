const router = require('express').Router();
const {
    getAllData,
    getDataById,
    deleteData,
    createData,
    updateData
} = require('../services/metaValue.js');

router.route('/')
    .get(getAllData)
    .post(createData);    

router.route('/:id')
    .get(getDataById)
    .delete(deleteData)
    .patch(updateData);

module.exports = router;