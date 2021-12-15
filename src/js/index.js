const db = require('./db/db.js');
const Category = require('./db/models/Category');

  // Tests

  (async () => {
    // Отримати всіх користувачів
    const users = await Category.findAll();
    console.log("All:", JSON.stringify(users, null, 4));
  })()

