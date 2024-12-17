import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  Checkbox,
  Button,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Academic() {
  const navigate = useNavigate(); // Create a navigation instance

  const rows = [
    { id: 1, regNo: '001', name: 'John Doe', eligibility: '' },
    { id: 2, regNo: '002', name: 'Jane Smith', eligibility: '' },
    // Add more rows as needed
  ];

  const handleNext = () => {
    navigate('/attendance'); // Navigate to the attendance page
  };

  return (
    <Box sx={{ padding: 3, marginLeft:'300px', marginTop:'100px' }}>
      {/* Form Inputs */}
      <Box
        sx={{
          display: 'flex',
          gap: 75,
          marginBottom: 3,
          flexWrap: 'wrap',
        }}
      >
        <TextField
          required
          label="Course"
          variant="outlined"
          sx={{ width: '250px' }}
        />
        <TextField
          required
          select
          label="Batch"
          variant="outlined"
          sx={{ width: '250px' }}
        >
          <MenuItem value="Batch 1">Batch 1</MenuItem>
          <MenuItem value="Batch 2">Batch 2</MenuItem>
          {/* Add more options as needed */}
        </TextField>
      </Box>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        According to Academic Criteria
      </Typography>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Reg. No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Theory</TableCell>
              <TableCell>Practical</TableCell>
              <TableCell>Viva</TableCell>
              <TableCell>Assignment 1</TableCell>
              <TableCell>Assignment 2</TableCell>
              <TableCell>Eligibility For Exam</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.regNo}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Select
                    value={row.eligibility}
                    onChange={(e) => {
                      row.eligibility = e.target.value;
                    }}
                    displayEmpty
                    sx={{ width: '150px' }}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="Eligible">Eligible</MenuItem>
                    <MenuItem value="Not Eligible">Not Eligible</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
      <Button variant="outlined" onClick={() => navigate('/exam')}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Academic;