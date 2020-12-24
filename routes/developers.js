const express = require('express');
const router = express.Router();

const developerController = require('../controllers/developerController');

// List all developers
router.get('/', developerController.index)

// Add new developer
router.get('/add', developerController.add_get);
router.post('/add', developerController.add_post);

// Update developer
router.get('/update/:id', developerController.update_get);
router.put('/update/:id', developerController.update_put);

// Show details of one developer
router.get('/:id', developerController.detail)

module.exports = router;