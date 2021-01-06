const { body, check, validationResult } = require('express-validator');

module.exports = [
    body("title")
        .notEmpty().withMessage('You have to enter a title'),

    body("description")
        .notEmpty().withMessage('You have to enter a description'),

    body("price")
        .notEmpty().withMessage('You have to enter a price')
        .isInt().withMessage('The price has to be a number'),

    body("release")
        .isDate().withMessage('This field has to be a date'),

    body('stock')
        .isInt().withMessage('The stock has to be a number')

]