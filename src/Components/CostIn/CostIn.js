import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CostInPage = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    participants: "",
    duration: "",
    customerDivision: "",
    panelMeetings: "",
    personnelCount: "",
    refreshmentValue: "",
    documentation: "",
    transport: "",
  });

  const [slpaRows, setSlpaRows] = useState([
    { category: "Category – A", hrs: "", rate: "" },
  ]);

  const [outsideRows, setOutsideRows] = useState([
    { category: "Category – A", hrs: "", rate: "" },
  ]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add new row to table
  const handleAddMore = (setRows, rows) => {
    setRows([...rows, { category: "New Category", hrs: "", rate: "" }]);
  };

  // Delete a row from table
  const handleDeleteRow = (index, rows, setRows) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  // Handle table input changes
  const handleInputChange = (e, index, rows, setRows) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  // Calculate total for a table
  const calculateTotal = (rows) => {
    return rows.reduce(
      (sum, row) => sum + (parseFloat(row.hrs) || 0) * (parseFloat(row.rate) || 0),
      0
    );
  };

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      slpaRows,
      outsideRows,
    });
  };

  return (
    <Box p={3} sx={{ maxWidth: 1000, margin: "0 auto", bgcolor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h5" align="center" mb={3}>
        Course & Batch Management: Cost-In
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Section: Course Details */}
        <Typography variant="h6" mb={2}>
          Course Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Course Name"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="No. of Participants"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer / Division"
              name="customerDivision"
              value={formData.customerDivision}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Section: SLPA Resources */}
        <Typography variant="h6" mb={2}>
          SLPA - Resources Personnel
        </Typography>
        <Grid container spacing={2}>
          {slpaRows.map((row, index) => (
            <React.Fragment key={`slpa-${index}`}>
              <Grid item xs={4}>
                <TextField
                  label="Category"
                  name="category"
                  value={row.category}
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Hrs"
                  name="hrs"
                  value={row.hrs}
                  onChange={(e) => handleInputChange(e, index, slpaRows, setSlpaRows)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Rate per hr./Cost"
                  name="rate"
                  value={row.rate}
                  onChange={(e) => handleInputChange(e, index, slpaRows, setSlpaRows)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteRow(index, slpaRows, setSlpaRows)}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => handleAddMore(setSlpaRows, slpaRows)}
            >
              Add More
            </Button>
          </Grid>
          <Grid item xs={12} textAlign="right" mt={2}>
            <Typography variant="subtitle1">
              Total: {calculateTotal(slpaRows).toFixed(2)} LKR
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Section: Outside Resources */}
        <Typography variant="h6" mb={2}>
          Outside - Resources Personnel
        </Typography>
        <Grid container spacing={2}>
          {outsideRows.map((row, index) => (
            <React.Fragment key={`outside-${index}`}>
              <Grid item xs={4}>
                <TextField
                  label="Category"
                  name="category"
                  value={row.category}
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Hrs"
                  name="hrs"
                  value={row.hrs}
                  onChange={(e) => handleInputChange(e, index, outsideRows, setOutsideRows)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Rate per hr./Cost"
                  name="rate"
                  value={row.rate}
                  onChange={(e) => handleInputChange(e, index, outsideRows, setOutsideRows)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteRow(index, outsideRows, setOutsideRows)}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => handleAddMore(setOutsideRows, outsideRows)}
            >
              Add More
            </Button>
          </Grid>
          <Grid item xs={12} textAlign="right" mt={2}>
            <Typography variant="subtitle1">
              Total: {calculateTotal(outsideRows).toFixed(2)} LKR
            </Typography>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CostInPage;
