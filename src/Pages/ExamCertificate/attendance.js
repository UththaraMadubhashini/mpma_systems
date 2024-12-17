
import React, { useState } from "react";
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
  Button,
  Paper,
  TextareaAutosize,
} from "@mui/material";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Attendance() {
  const [totalSessions, setTotalSessions] = useState("");
  const [rows, setRows] = useState([
    { id: 1, regNo: "001", name: "John Doe", attended: "", percentage: "", eligibility: "", remark: "" },
    { id: 2, regNo: "002", name: "Jane Smith", attended: "", percentage: "", eligibility: "", remark: "" },
    // Add more rows if needed
  ]);

  const navigate = useNavigate(); // Create a navigation instance

  const handleChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleNext = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <Box sx={{ padding: 3, marginLeft:'300px', marginTop:'100px' }}>
      {/* Title */}
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        According to Attendance Criteria
      </Typography>

      {/* Total Number of Sessions */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Total No. of Sessions:
        </Typography>
        <Select
          value={totalSessions}
          onChange={(e) => setTotalSessions(e.target.value)}
          displayEmpty
          sx={{ width: "200px" }}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="20">20</MenuItem>
          <MenuItem value="30">30</MenuItem>
        </Select>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Reg. No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Attended No. of Sessions</TableCell>
              <TableCell>Attendance Percentage</TableCell>
              <TableCell>Eligibility For Exam</TableCell>
              <TableCell>Remark</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.regNo}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={row.attended}
                    onChange={(e) => handleChange(row.id, "attended", e.target.value)}
                    sx={{ width: "120px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={row.percentage}
                    onChange={(e) => handleChange(row.id, "percentage", e.target.value)}
                    sx={{ width: "120px" }}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={row.eligibility}
                    onChange={(e) => handleChange(row.id, "eligibility", e.target.value)}
                    displayEmpty
                    sx={{ width: "150px" }}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="Eligible">Eligible</MenuItem>
                    <MenuItem value="Not Eligible">Not Eligible</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <TextareaAutosize
                    minRows={2}
                    placeholder="Enter remark"
                    value={row.remark}
                    onChange={(e) => handleChange(row.id, "remark", e.target.value)}
                    style={{ width: "150px" }}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() =>
                      setRows((prevRows) => prevRows.filter((r) => r.id !== row.id))
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
      <Button variant="outlined" onClick={() => navigate('/academic')}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Attendance;