'use strict';

const app = require('./app');
const db = require('./db/db');
const associate = require('./db/associate');
require('dotenv').config();

const PORT = process.env.FASTIFY_PORT;

(async () => {
  associate();
  await db.sync({ force: false });

  app.listen(PORT || 3000, process.env.FASTIFY_HOST || '127.0.0.1', err => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    console.log(`Server running on port ${PORT}`);
  });
})();
