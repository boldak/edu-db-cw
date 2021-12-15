const app = require('./app');
const db = require('./db/db');
const associate = require('./db/associate');
const dotenv = require('dotenv').config();

(async () => {
  associate();
  await db.sync({force: true});

  app.listen(process.env.EXPRESS_PORT, () => {
      console.log('server running');
  });
})();