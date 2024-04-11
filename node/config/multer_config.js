const multer = require('multer');
const path = require('path');

const getStorage = (destination) => {
  console.log('Current working directory:', __dirname);
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, destination)); // Use absolute path
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Set the filename for uploaded files
    },
  });
};

const devotionAudio = multer({ storage: getStorage('../../react/public/devotion_audio') });
const devotionThumbnail = multer({ storage: getStorage('../../react/public/devotion_thumbnail') });

module.exports = {
    devotionAudio,
    devotionThumbnail,
};
