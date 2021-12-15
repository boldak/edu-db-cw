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
        console.log(e);
        process.exit(0);
    }

    res.send('done');
};

const deleteData = async (req, res) => {
    const rows = await MetaDataValue.destroy({
        where: {
            id: req.body.id
        }
    });

    if(rows = 0){
        res.send('smth wrong');
        return;
    }

    res.send('done');
};

const updateData = async (req, res) => {
    const rows = await MetaDataValue.update(req.body, {
        where: {
            id: req.body.id
        }
    });

    if(rows = 0){
        res.send('smth wrong');
        return;
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