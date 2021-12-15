const DataSet = require('../db/models/DataSet');

exports.getAllDataSets = async (req, res) => {
  try {
    let dataSets = await DataSet.findAll();

    res.status(200).json({
      status: 'success',
      results: dataSets.length,
      data: {
        dataSets,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getDataSet = async (req, res) => {
  try {
    const dataSet = await DataSet.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!dataSet) throw 'Dataset with the specified ID does not exists';

    res.status(200).json({
      status: 'success',
      data: {
        dataSet,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createDataSet = async (req, res) => {
  try {
    const newDataSet = await DataSet.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newDataSet,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateDataSet = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await DataSet.update(req.body, {
      where: { id },
    });

    if (!updated) throw 'Dataset with the specified ID does not exists';

    const updatedDataSet = await DataSet.findOne({
      where: { id },
    });
    res.status(200).json({
      status: 'success',
      data: {
        updatedDataSet,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteDataSet = async (req, res) => {
  const id = req.params.id;

  try {
    const dataSet = await DataSet.findOne({
      where: { id },
    });

    if (!dataSet) throw 'Dataset with the specified ID does not exists';

    await DataSet.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
