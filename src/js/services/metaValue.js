const {MetaDataValue} = require('../database/models');

const getAllData = async (req, res) => {
    let result = await MetaDataValue.findAll();
    result = result.map(e => e.dataValues);
    res.send(result);
};

const getDataById = async (req, res) => {
    const result = await MetaDataValue.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send(result);
};

const createData = async (req, res) => {
    try{
        await MetaDataValue.create(req.body);
    } catch(e) {
        res.status(400).send('invalid data');
        return;
    }

    res.send('done');
};

const deleteData = async (req, res) => {
    try{
        await MetaDataValue.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'smth went wrong while deleting';
    }

    res.send('done');
};

const updateData = async (req, res) => {
    try{
        await MetaDataValue.update(req.body, {
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'smth went wrong while updating';
    }

    res.send('done');
}

module.exports = {
    getAllData,
    getDataById,
    deleteData,
    createData,
    updateData
};