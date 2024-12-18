const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'course_management',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// API endpoint to save course data
app.post('/api/save-course', (req, res) => {
    const data = req.body;
    const sql = `
        INSERT INTO courses 
        (course_id, stream, course_name, medium, location, resources, assessment_criteria, fees, payment_conditions, 
         duration_t, duration_type, day_t, day_type, session_t, session_type, max_lecture_hours, breakeven, 
         max_student_count, entry_requirement) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        data.courseId,
        data.stream,
        data.courseName,
        JSON.stringify(data.medium),
        JSON.stringify(data.location),
        JSON.stringify(data.resources),
        JSON.stringify(data.assessmentCriteria),
        data.fees,
        data.paymentConditions,
        data.durationT,
        data.durationType,
        data.dayT,
        data.dayType,
        data.sessionT,
        data.sessionType,
        data.maxLectureHours,
        data.breakeven,
        data.maxStudentCount,
        data.entryRequirement,
    ], (err, result) => {
        if (err) {
            console.error('Failed to save course data:', err);
            res.status(500).send('Failed to save course data');
        } else {
            res.send('Course data saved successfully!');
        }
    });
});

// Start the server
app.listen(3001, () => {
    console.log('Server running on port 3001');
});

// API endpoint to get all courses
app.get('/api/courses', (req, res) => {
    const sql = 'SELECT * FROM courses';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Failed to fetch courses:', err);
            res.status(500).send('Error fetching courses data');
        } else {
            res.json(results);
        }
    });
});

  