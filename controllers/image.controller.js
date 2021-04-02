const fs = require('fs');
const Image = require('../models/image.model');

exports.uploads = async (req, res) => {
  const files = req.files;
  const images = files.map(file =>
    fs.readFileSync(file.path).toString('base64')
  );

  let result = images.map((image, index) => {
    let newImage = new Image({
      filename: files[index].originalname,
      contentType: files[index].mimetype,
      imageBase64: image,
    });

    return newImage
      .save()
      .then(() => {
        return { message: `${files[index].originalname} uploaded` };
      })
      .catch(error => {
        if (error.name === 'MongoError' && error.code === 11000) {
          return Promise.reject({
            error: `Duplicate ${files[index].originalname}`,
          });
        }
        return Promise.reject({
          error: error.message || `Cannot Upload ${files[index].originalname}`,
        });
      });
  });

  Promise.all(result)
    .then(message => {
      res.redirect('/');
    })
    .catch(error => {
      res.json(error);
    });
};
