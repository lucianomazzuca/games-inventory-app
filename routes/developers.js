const express = require('express');
const router = express.Router();

const developerController = require('../controllers/developerController');

router.get('/', developerController.index)

module.exports = router;