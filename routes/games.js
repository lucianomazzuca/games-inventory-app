const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/gameController');

router.get('/', gamesController.index)

module.exports = router;