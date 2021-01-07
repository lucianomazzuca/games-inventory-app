const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const gameValidator = require('../validations/gameValidator');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public/images/games'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("File format should be PNG,JPG,JPEG"), false); // if validation failed then generate error
    }
  }
 })

const gamesController = require('../controllers/gameController');

// Index route: list all games
router.get('/', gamesController.index);

// Add new game
router.get('/add', gamesController.add_get);
router.post('/add', upload.any(), gameValidator, gamesController.add_post);

// Update game
router.get('/update/:id', gamesController.update_get);
router.put('/update/:id', upload.any(), gameValidator, gamesController.update_put);

// Delete game
router.delete('/delete/:id', gamesController.delete);

// Get: Detail of one game
router.get('/:id', gamesController.detail);

module.exports = router;
