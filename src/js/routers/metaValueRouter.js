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
    .post(createData)
    .delete(deleteData)
    .patch(updateData);

router.get('/:id', getDataById);

module.exports = router;