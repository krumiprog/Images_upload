const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    require: true,
    unique: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  imageBase64: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Image', imageSchema);
