const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./DB.js');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Example route for course management
app.post('/api/course', (req, res) => {
  const courseData = req.body;
  console.log('Course Data Received:', courseData);
  // Save courseData to the database
  res.status(200).json({ message: 'Course data saved successfully!' });
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
