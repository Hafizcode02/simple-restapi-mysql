const express = require('express');

const UserController = require('../controllers/users');
const { runValidation, createUserValidator } = require('../utils/validation');
const router = express.Router();

// CREATE - POST
router.post('/', createUserValidator, runValidation, UserController.createNewUser);
// READ - GET
router.get('/', UserController.getAllUsers);
// READ - GET BY ID
router.get('/:id', UserController.getUserByID);
// UPDATE - PATCH
router.patch('/:id', UserController.updateUser);
// DELETE - DELETE
router.delete('/:id', UserController.deleteUser);

module.exports = router