const server = require('express')();
const seq = require('./database/connection.js');
const associate = require('./database/associate.js');

(async () => {
    associate();
    await seq.sync({force: true});

    server.listen(3000, () => {
        console.log('server running');
    });
})();