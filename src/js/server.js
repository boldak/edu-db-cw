const express = require('express');
const server = express();
const seq = require('./database/connection.js');
const associate = require('./database/associate.js');
const authRouter = require('./routers/authRouter.js');
const metaValueRouter = require('./routers/metaValueRouter.js');

server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use('/auth', authRouter);
server.use('/metaValue', metaValueRouter);

(async () => {
    associate();
    await seq.sync({force: true});

    server.listen(3000, () => {
        console.log('server running');
    });
})();