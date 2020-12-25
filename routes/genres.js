const express = require('express');
const router = express.Router();

const genreController = require('../controllers/genreController');

// List all genres
router.get('/', genreController.index)

// Add new genre
router.get('/add', genreController.add_get);
router.post('/add', genreController.add_post);

// Update genre
router.get('/update/:id', genreController.update_get);
router.put('/update/:id', genreController.update_put);

// Delete genre
router.delete('/delete/:id', genreController.delete);

// Detail of genre
router.get('/:id', genreController.detail);

module.exports = router;