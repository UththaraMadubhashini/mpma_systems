import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Finallist() {
  const navigate = useNavigate(); // Create a navigation instance
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [rows, setRows] = useState([
    { id: 1, fullName: "", regNo: "", nic: "", eligibility: "", remarks: "" },
    { id: 2, fullName: "", regNo: "", nic: "", eligibility: "", remarks: "" },
    // Add more rows as needed
  ]);

  const handleChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  return (
    <Box sx={{ padding: 3,marginLeft:'300px', marginTop:'100px' }}>
      {/* Select Course and Batch */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1">
            Select Course<span style={{ color: "red" }}> *</span>:
          </Typography>
          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            displayEmpty
            variant="outlined"
            sx={{ width: "200px" }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Maritime English">Maritime English</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
          </Select>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1">
            Select Batch<span style={{ color: "red" }}> *</span>:
          </Typography>
          <Select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            displayEmpty
            variant="outlined"
            sx={{ width: "200px" }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Batch 1">Batch 1</MenuItem>
            <MenuItem value="Batch 2">Batch 2</MenuItem>
            <MenuItem value="Batch 3">Batch 3</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ border: "1px solid #1976d2", marginBottom: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Reg. No</TableCell>
              <TableCell>NIC</TableCell>
              <TableCell>Eligibility For Exam</TableCell>
              <TableCell>Remark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <TextField
                    value={row.fullName}
                    onChange={(e) => handleChange(row.id, "fullName", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: "150px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.regNo}
                    onChange={(e) => handleChange(row.id, "regNo", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: "120px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.nic}
                    onChange={(e) => handleChange(row.id, "nic", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: "150px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.eligibility}
                    onChange={(e) => handleChange(row.id, "eligibility", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: "150px" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.remarks}
                    onChange={(e) => handleChange(row.id, "remarks", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ width: "150px" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={() => navigate("/payment")}>
          Back
        </Button>
        <Button variant="contained" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Finallist;
