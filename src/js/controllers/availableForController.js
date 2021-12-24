const AvailableFor = require('../db/models/AvailableFor');

exports.getAllAvailableFor = async (req, res) => {
  try {
    const aFor = await AvailableFor.findAll();
    return res.json(aFor);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createAvailableFor = async (req, res) => {
  try {
    const aFor = await AvailableFor.create(req.body);

    return res.json(aFor);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getAvailableFor = async (req, res) => {
  try {
    const id = req.params.id;
    const aFor = await AvailableFor.findOne({
      where: {
        id,
      },
    });
    return res.json(aFor);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateAvailableFor = async (req, res) => {
  try {
    const id = req.params.id;
    const aFor = await AvailableFor.findOne({
      where: {
        id,
      },
    });
    aFor.update(req.body);
    aFor.save();
    return res.json(aFor);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteAvailableFor = async (req, res) => {
  try {
    const id = req.params.id;
    const aFor = await AvailableFor.destroy({
      where: {
        id,
      },
    });
    return res.json(aFor);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
