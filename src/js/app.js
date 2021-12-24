const express = require('express');

const dataSetRouter = require('./routes/dataSetsRoutes');
const availableForRouter = require('./routes/availableForRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/dataSets', dataSetRouter);
app.use('/api/v1/availableFor', availableForRouter);

module.exports = app;
