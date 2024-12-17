import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cdw() {
  const [formInputs, setFormInputs] = useState({
    courseName: "",
    participants: "",
    duration: "",
    customer: "",
    stream: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProceed = () => {
    // Navigate to Cd.js page and optionally pass form data as state
    navigate("/cd", { state: formInputs });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>
          Basic Details
        </Typography>

        <Grid container spacing={2}>
          {/* Course Name */}
          <Grid item xs={12}>
            <TextField
              label="Name of the Course"
              variant="outlined"
              fullWidth
              name="courseName"
              value={formInputs.courseName}
              onChange={handleInputChange}
            />
          </Grid>

          {/* No. of Participants */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="No. of Participants"
              variant="outlined"
              fullWidth
              name="participants"
              value={formInputs.participants}
              onChange={handleInputChange}
              type="number"
            />
          </Grid>

          {/* Duration */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Duration (Days)"
              variant="outlined"
              fullWidth
              name="duration"
              value={formInputs.duration}
              onChange={handleInputChange}
              type="number"
            />
          </Grid>

          {/* Customer */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Customer"
              variant="outlined"
              fullWidth
              name="customer"
              value={formInputs.customer}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Stream */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Stream"
              variant="outlined"
              fullWidth
              name="stream"
              value={formInputs.stream}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        {/* Proceed Button */}
        <Box sx={{ marginY: 3, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Cdw;
