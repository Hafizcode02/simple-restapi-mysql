const { body, validationResult } = require('express-validator');
const users = require('../models/users');

const createUserValidator = [
    body("name")
        .exists({ checkFalsy: true })
        .withMessage("You must fill the name")
        .isString()
        .withMessage("name should be string")
        .isLength({ min: 5 }).withMessage("name should be contain at least 5 character"),
    body("email")
        .exists()
        .withMessage('email must filled')
        .isEmail().withMessage('must be valid email address')
        .custom(async value => {
            const [data] = await users.findEmail(value);
            if (data != "") {
                throw new Error("Email is already used")
            }
        }),
    body("address")
        .exists()
        .withMessage("You must fill the address")
];

const runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: "Bad Request",
            message: errors.array()
        })
    }
    next()
}

module.exports = { createUserValidator, runValidation }