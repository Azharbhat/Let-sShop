const bcrypt = require('bcryptjs');
const User = require('../models/usersModel');

// Controller for user registration
exports.registerUser = async (req, res) => {
    try {
        // Extracting user input from request body
        const { firstName, lastName, email, password } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Creating new user instance
        user = new User({
            firstName,
            lastName,
            email,
            password
        });
        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        // Saving the user to the database
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Controller for user login
// Controller for user login
exports.loginUser = async (req, res) => {
    try {
        // Extracting user input from request body
        const { email, password } = req.body;
        // Check if the user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        // Compare the entered password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        res.json({ msg: 'User logged in successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' }); // Return a JSON object with the error message
    }
};
