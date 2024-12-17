import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [course, setCourse] = useState('Maritime English');
  const [batch, setBatch] = useState('Batch 1');
  const [rows, setRows] = useState([
    { id: 1, regNo: '', name: '', regFee: '', installment1: '', installment2: '', eligibility: '' },
    { id: 2, regNo: '', name: '', regFee: '', installment1: '', installment2: '', eligibility: '' },
  ]);

  const navigate = useNavigate();

  const handleChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleNext = () => {
    navigate('/finallist');
  };

  return (
    <Box sx={{ padding: 3,marginLeft:'300px', marginTop:'100px' }}>
      {/* Course and Batch */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">Course:</Typography>
          <TextField
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: '200px' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1">Batch:</Typography>
          <TextField
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: '200px' }}
          />
        </Box>
      </Box>

      {/* Title */}
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        According to Payment Criteria
      </Typography>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Reg. No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Registration Fee</TableCell>
              <TableCell>Installment 1</TableCell>
              <TableCell>Installment 2</TableCell>
              <TableCell>Eligibility</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <TextField
                    value={row.regNo}
                    onChange={(e) => handleChange(row.id, 'regNo', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.name}
                    onChange={(e) => handleChange(row.id, 'name', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.regFee}
                    onChange={(e) => handleChange(row.id, 'regFee', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.installment1}
                    onChange={(e) => handleChange(row.id, 'installment1', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.installment2}
                    onChange={(e) => handleChange(row.id, 'installment2', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.eligibility}
                    onChange={(e) => handleChange(row.id, 'eligibility', e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <Button variant="outlined" onClick={() => navigate('/attendance')}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Payment;