const mysql = require('mysql2');

const connectionUrl = 'mysql://root:@localhost:3306/opendatamanagementsystem';

const connection = mysql.createConnection({
    uri: connectionUrl,
    password: 'Pro100jeka$'
});

module.exports = connection;