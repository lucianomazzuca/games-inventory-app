const { body, validationResult} = require('express-validator');

module.exports = [
    body('name').isLength({ min: 1 }).withMessage('You have to enter a name')
]
