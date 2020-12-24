const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/gameController');

// Index route: list all games
router.get('/', gamesController.index);

// Add new game
router.get('/add', gamesController.add_get);
router.post('/add', gamesController.add_post);

// Get: Detail of one game
router.get('/:id', gamesController.detail);

module.exports = router;
