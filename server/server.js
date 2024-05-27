const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.static("public"));
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();

// Routes
app.use('/api/items', require("./routes/items")); // Assuming you have items routes
app.use('/api/users', require("./routes/users")); // Use the user router for user-related routes

app.listen(PORT, () => console.log("Server is running on port ", PORT));
