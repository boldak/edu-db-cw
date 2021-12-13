const server = require('express')();
const seq = require('./database/connection.js');
const associate = require('./database/associate.js');
const authRouter = require('./routers/authRouter.js');

server.use('/auth', authRouter);

(async () => {
    associate();
    await seq.sync({force: true});

    server.listen(3000, () => {
        console.log('server running');
    });
})();