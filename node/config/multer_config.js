const multer = require('multer');

const getStorage = (destination) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Set the filename for uploaded files
    },
  });
};

const devotionAudio = multer({ storage: getStorage('../../../../react/public/tion_audio') });
const devotionThumbnail = multer({ storage: getStorage('../../../../react/public/tion_thumbnail') });

module.exports = {
    devotionAudio,
    devotionThumbnail,
};
