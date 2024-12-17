const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'course_management', // Replace with your database name
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database');
  connection.release();
});

module.exports = db;
