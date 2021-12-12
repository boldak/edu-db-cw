const db = require('./lib/db');
const { Action,
  ActionType,
  AvailableAction,
  AvailableFor,
  Category,
  DataFile,
  DataSet,
  Grant,
  MetaDataKey,
  MetaDataValue,
  Role,
  State,
  Type,
  User, } = require('./models/model');
 
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // Tests

  (async () => {
    // Отримати всіх користувачів
    const users = await User.findAll();
    console.log("All:", JSON.stringify(users, null, 4));
  })()