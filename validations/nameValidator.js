const { body, validationResult} = require('express-validator');

module.exports = [
    body('name').trim().notEmpty().withMessage('You have to enter a name')
]
