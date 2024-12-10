const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./DB'); // Import the database connection

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route: Save Course Information
app.post('/api/course-info', (req, res) => {
  const { courseName, participants, duration, customerDivision } = req.body;

  const query = `INSERT INTO course_info (courseName, participants, duration, customerDivision) 
                 VALUES (?, ?, ?, ?)`;

  db.query(query, [courseName, participants, duration, customerDivision], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving course information.');
    }
    res.status(200).send('Course information saved successfully.');
  });
});

// Route: Save Development Data
app.post('/api/development-data', (req, res) => {
  const { rows } = req.body;

  const query = `INSERT INTO development_data (description, nos, rate) VALUES ?`;

  const values = rows.map(row => [row.description, row.nos, row.rate]);

  db.query(query, [values], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving development data.');
    }
    res.status(200).send('Development data saved successfully.');
  });
});

// Route: Save Delivery Data
app.post('/api/delivery-data', (req, res) => {
  const { rows } = req.body;

  const query = `INSERT INTO delivery_data (role, hrs, rate) VALUES ?`;

  const values = rows.map(row => [row.role, row.hrs, row.rate]);

  db.query(query, [values], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving delivery data.');
    }
    res.status(200).send('Delivery data saved successfully.');
  });
});

// Route: Save SLPA and Outside Resource Data
app.post('/api/resource-data', (req, res) => {
  const { slpaRows, outsideRows } = req.body;

  const slpaQuery = `INSERT INTO slpa_resources (category, hrs, rate) VALUES ?`;
  const outsideQuery = `INSERT INTO outside_resources (category, hrs, rate) VALUES ?`;

  const slpaValues = slpaRows.map(row => [row.category, row.hrs, row.rate]);
  const outsideValues = outsideRows.map(row => [row.category, row.hrs, row.rate]);

  db.query(slpaQuery, [slpaValues], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving SLPA resource data.');
    }
    db.query(outsideQuery, [outsideValues], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error saving outside resource data.');
      }
      res.status(200).send('Resource data saved successfully.');
    });
  });
});

// Route: Save Overhead Costs
app.post('/api/overhead-costs', (req, res) => {
  const { totalEstimatedCost, inflation, fullCost, nbt, profitMargin, costFeePerHead, totalCourseFee } = req.body;

  const query = `INSERT INTO overhead_costs 
                 (totalEstimatedCost, inflation, fullCost, nbt, profitMargin, costFeePerHead, totalCourseFee)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [totalEstimatedCost, inflation, fullCost, nbt, profitMargin, costFeePerHead, totalCourseFee], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving overhead costs.');
    }
    res.status(200).send('Overhead costs saved successfully.');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
