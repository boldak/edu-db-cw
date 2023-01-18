const { Router, query } = require("express");
const mysql = require('mysql2/promise');
const { extend } = require('lodash');

const connectionUrl = 'mysql://root:@localhost:3306/opendatamanagementsystem';

const sql = {
  createUser: `INSERT INTO USER(ID, USERNAME, EMAIL, PASSWORD, AVATAR, DONATE_ID, ROLE_ID) VALUES (:id, :username, :email, :password, :avatar, :donate_id, :role_id)`,
  readUserByID: `SELECT * FROM USER WHERE ID= :id`,
  readAllUser: `SELECT * FROM USER`,
  updateUserByID: `UPDATE USER SET USERNAME= :username, EMAIL= :email, PASSWORD= :password, AVATAR= :avatar, DONATE_ID= donate_id, ROLE_ID= :role_id WHERE ID= :id`,
  deleteUserByID: `DELETE FROM USER WHERE ID= :id`,
};

const executeSQL = async (query, values) => {
  let connection;
  let sqlStatement;
  try {
    connection = await mysql.createConnection({
      uri: connectionUrl,
      password: 'Pro100jeka$',
      namedPlaceholders: true
    });

    sqlStatement = await connection.format(query, values);

    const [ results, fields ] = await connection.execute(sqlStatement);
    return results;
  } catch (err) {
    throw new Error(`SQL: ${sqlStatement} - ${err.toString()}`);
  } finally {
    if (connection) connection.end();
  }
};

const router = Router();

router.post('/:id', async (req, res) => {
  try {
    const values = extend({}, req.body, req.params);
    let result = await executeSQL(sql.createUser, values);
    result = await executeSQL(sql.readUserByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: err.toString()
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await executeSQL(sql.readAllUser);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await executeSQL(sql.readUserByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

router.put('/:id', async (req, res) => {
  try {
    const values = extend({}, req.body, req.params);
    let result = await executeSQL(sql.updateUserByID, values);
    result = await executeSQL(sql.readUserByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await executeSQL(sql.readUserByID, req.params);
    await executeSQL(sql.deleteUserByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

module.exports = router;