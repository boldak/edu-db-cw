const fastify = require('./fastify');
const db = require('./db/db');
const associate = require('./db/associate');
const dotenv = require('dotenv').config();

const port = process.env.FASTIFY_PORT;

(async () => {
  associate();
  await db.sync({ force: false });

  fastify.listen(port, err => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server running on port ${port}`);
  });
})();
