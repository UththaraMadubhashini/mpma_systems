import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CourseManagementForm = () => {
  const [slpaResources, setSlpaResources] = useState([
    { category: "Category - A", hrs: "", rate: "" },
    { category: "Category - B", hrs: "", rate: "" },
    { category: "Category - C", hrs: "", rate: "" },
  ]);

  const [outsideResources, setOutsideResources] = useState([
    { category: "Category - A", hrs: "", rate: "" },
    { category: "Category - B", hrs: "", rate: "" },
    { category: "Category - C", hrs: "", rate: "" },
    { category: "Co-ordination (if any)", hrs: "", rate: "" },
  ]);

  const handleInputChange = (rows, setRows, index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = (setRows) => {
    setRows((prevRows) => [...prevRows, { category: "", hrs: "", rate: "" }]);
  };

  return (
    <div>
      {/* SLPA Resources Personnel */}
      <div style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          SLPA - Resources Personnel
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Hrs</TableCell>
                <TableCell>Rate per hr. / Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slpaResources.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={row.hrs}
                      onChange={(e) =>
                        handleInputChange(slpaResources, setSlpaResources, index, "hrs", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={row.rate}
                      onChange={(e) =>
                        handleInputChange(slpaResources, setSlpaResources, index, "rate", e.target.value)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="outlined"
            onClick={() => handleAddRow(setSlpaResources)}
          >
            Add More
          </Button>
        </Box>
      </div>

      {/* Outside Resources Personnel */}
      <div style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          Outside - Resources Personnel
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Hrs</TableCell>
                <TableCell>Rate per hr. / Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {outsideResources.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={row.hrs}
                      onChange={(e) =>
                        handleInputChange(outsideResources, setOutsideResources, index, "hrs", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={row.rate}
                      onChange={(e) =>
                        handleInputChange(outsideResources, setOutsideResources, index, "rate", e.target.value)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="outlined"
            onClick={() => handleAddRow(setOutsideResources)}
          >
            Add More
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default CourseManagementForm;
