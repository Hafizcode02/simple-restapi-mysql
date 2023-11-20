const express = require('express');

const UserController = require('../controllers/users.js');
const router = express.Router();

// CREATE - POST
router.post('/', UserController.createNewUser);

router.get('/', UserController.getAllUsers);

module.exports = router