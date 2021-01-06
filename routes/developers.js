const express = require('express');
const router = express.Router();
const nameValidator = require('../validations/nameValidator');
const developerController = require('../controllers/developerController');

// List all developers
router.get('/', developerController.index)

// Add new developer
router.get('/add', developerController.add_get);
router.post('/add', nameValidator, developerController.add_post);

// Update developer
router.get('/update/:id', developerController.update_get);
router.put('/update/:id', nameValidator ,developerController.update_put);

// Delete developer
router.delete('/delete/:id', developerController.delete)

// Show details of one developer
router.get('/:id', developerController.detail)

module.exports = router;