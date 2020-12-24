const express = require('express');
const router = express.Router();

const genreController = require('../controllers/genreController');

// List all genres
router.get('/', genreController.index)

// Detail of genre
router.get('/:id', genreController.detail);

module.exports = router;