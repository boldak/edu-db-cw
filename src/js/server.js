const express = require('express');
const server = express();
const seq = require('./database/connection.js');
const associate = require('./database/associate.js');
const authRouter = require('./routers/authRouter.js');
const metaValueRouter = require('./routers/metaValueRouter.js');
const catRouter = require('./routers/categoryRouter.js');

server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use('/auth', authRouter);
server.use('/metaValue', metaValueRouter);
server.use('/category', catRouter);

(async () => {
    associate();
    await seq.sync();

    server.listen(3000, () => {
        console.log('server running');
    });
})();