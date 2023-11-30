const { body, validationResult } = require('express-validator');

const createUserValidator = [
    body("name")
        .exists({ checkFalsy: true })
        .withMessage("You must fill the name")
        .isString()
        .withMessage("name should be string"),
    body("email")
        .exists()
        .withMessage('email must filled')
        .isEmail().withMessage('must be valid email address'),
    body("address")
        .exists()
        .withMessage("You must fill the address")
];

const runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: "Bad Request",
            message: errors.array()[0].msg
        })
    }
    next()
}

module.exports = { createUserValidator, runValidation }