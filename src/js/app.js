const express = require('express');

const dataSetRouter = require('./routes/dataSetsRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/dataSets', dataSetRouter);

module.exports = app;
