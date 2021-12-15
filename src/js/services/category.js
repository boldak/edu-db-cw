const { Category } = require('../database/models.js');

const createCat = async (req, res) => {
    try {
        await Category.create(req.body);
    } catch(e) {
        throw 'smth wrong while creating';
    }

    res.status(201).send('done');
};

const deleteCat = async (req, res) => {
    try {
        await Category.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'smth wrong while creating';
    }

    res.status(204).send();
};

const getCat = async (req, res) => {
    const result = await Category.findAll();

    res.status(200).send(result);
};

module.exports = {
    createCat,
    deleteCat,
    getCat
};