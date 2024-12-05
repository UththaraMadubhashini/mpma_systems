const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'course_management',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// API routes
// Add course info
app.post('/api/course', (req, res) => {
    const { courseName, participants, duration, customerDivision } = req.body;
    const query = 'INSERT INTO course_info (course_name, participants, duration, customer_division) VALUES (?, ?, ?, ?)';
    db.query(query, [courseName, participants, duration, customerDivision], (err, result) => {
        if (err) {
            console.error('Error inserting course info:', err);
            res.status(500).send('Error inserting course info');
        } else {
            res.status(201).send({ id: result.insertId, message: 'Course info added successfully' });
        }
    });
});

// Add development work
app.post('/api/development', (req, res) => {
    const { courseId, developmentRows } = req.body;
    const query = 'INSERT INTO development_work (course_id, description, nos, rate) VALUES ?';
    const values = developmentRows.map(row => [courseId, row.description, row.nos, row.rate]);
    db.query(query, [values], (err, result) => {
        if (err) {
            console.error('Error inserting development work:', err);
            res.status(500).send('Error inserting development work');
        } else {
            res.status(201).send('Development work added successfully');
        }
    });
});

// Fetch all course info
app.get('/api/courses', (req, res) => {
    const query = 'SELECT * FROM course_info';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching courses:', err);
            res.status(500).send('Error fetching courses');
        } else {
            res.status(200).json(results);
        }
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
