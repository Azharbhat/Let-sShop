const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/usersController');

// Route for user registration
router.post('/account/register', registerUser);

// Route for user login
router.post('/account/login', loginUser);

module.exports = router;
