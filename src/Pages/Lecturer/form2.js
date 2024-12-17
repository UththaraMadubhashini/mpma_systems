import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Form2() {
    const navigate = useNavigate();
  const [rows, setRows] = useState([
    { institution: "", years: "", startYear: "", endYear: "", designation: "", natureOfWork: "" },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { institution: "", years: "", startYear: "", endYear: "", designation: "", natureOfWork: "" }]);
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) => (i === index ? { ...row, [field]: value } : row));
    setRows(updatedRows);
  };

  return (
    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: "auto",
        margin: "auto",
        marginLeft: "0px",
        marginTop: "85px",
      }}
    >
      {/* Form Heading */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: 2 }}
      >
        Academic Details
      </Typography>

      {/* Working Experience Table */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Working Experience
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Institution/Establishment</TableCell>
              <TableCell>Years of Service</TableCell>
              <TableCell>Start Year</TableCell>
              <TableCell>End Year</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Nature of Work</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={row.institution}
                    onChange={(e) => handleRowChange(index, "institution", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={row.years}
                    onChange={(e) => handleRowChange(index, "years", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={row.startYear}
                    onChange={(e) => handleRowChange(index, "startYear", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={row.endYear}
                    onChange={(e) => handleRowChange(index, "endYear", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={row.designation}
                    onChange={(e) => handleRowChange(index, "designation", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={row.natureOfWork}
                    onChange={(e) => handleRowChange(index, "natureOfWork", e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        sx={{ marginTop: 2 }}
        variant="outlined"
        onClick={handleAddRow}
      >
        Add Row
      </Button>

      {/* Qualifications */}
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Highest Qualification"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Other Qualifications"
            variant="outlined"
          />
        </Grid>
      </Grid>

      {/* Buttons */}
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        
      </Box>
    </Box>
  );
}

export default Form2;
