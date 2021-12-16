const {User} = require('../database/models');

const postLogin = async (req, res) => {
    const result = await User.findOne({
        where: {
            name: req.body.name,
            password: req.body.password
        }
    });

    res.send(result ? 'auth completed' : 'incorrect auth data');
};

const postReg = async (req, res) => {
    const exist = await User.findOne({
        where: {
            name: req.body.name
        }
    });

    if(exist){
        res.send('name already exists');
        return;
    }

    await User.create(req.body);
    res.send('done!');
};

module.exports = {postLogin, postReg};