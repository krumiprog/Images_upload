const Image = require('../models/image.model');

exports.main = async (req, res) => {
  const images = await Image.find();
  res.render('index', { images });
};
