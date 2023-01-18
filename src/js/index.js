const express = require('express');
const bodyParser = require('body-parser');

const port = 5000;

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', require('./routes'));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});