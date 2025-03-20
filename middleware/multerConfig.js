const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // post gareko file lai destination define gareko
    cb(null, "./storage"); // callback (error, success)
  },
  filename: function (req, file, cb) {
    cb(null, "pranajal-" + file.originalname); // file lai naming gareko
  },
});

module.exports = {
  storage,
  multer,
};
