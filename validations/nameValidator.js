const { body, validationResult} = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('You have to enter a name')
]
