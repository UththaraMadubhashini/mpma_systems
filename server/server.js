const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Allow frontend to access backend
const connection = require('./DB'); // Import your db.js file

const app = express();
const PORT = 3000; // You can change this port if needed

// Middleware setup
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all requests

// Route to fetch all students
app.get('/students', (req, res) => {
  const query = 'SELECT * FROM students'; // Adjust table name if needed
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

// Route to fetch students by course and batch
app.get('/students/:course/:batch', (req, res) => {
  const { course, batch } = req.params;
  const query = 'SELECT * FROM students WHERE course = ? AND batch = ?'; // Adjust column names
  connection.query(query, [course, batch], (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

// Route to add a new student
app.post('/students', (req, res) => {
  const { name, course, batch } = req.body;
  const query = 'INSERT INTO students (name, course, batch) VALUES (?, ?, ?)'; // Adjust column names
  connection.query(query, [name, course, batch], (err, result) => {
    if (err) {
      res.status(500).send('Error inserting data');
      console.error(err);
    } else {
      res.status(201).send('Student added successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});