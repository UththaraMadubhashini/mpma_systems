import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Divider,
} from "@mui/material";

function CourseRegistration() { // Fixed component name
  const [formData, setFormData] = useState({
    courseId: "",
    stream: "",
    courseName: "",
    medium: [],
    location: [],
    resources: [],
    assessmentCriteria: [],
    fees: "",
    paymentConditions: "",
  });

  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4, paddingBottom: 4 }}>
      {/* Title */}
      <Typography
        variant="h5"
        color="primary"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Course & Batch Management
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{ marginBottom: 2, textAlign: "center" }}
      >
        Appendix A
      </Typography>

      <Box
        sx={{
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Grid container spacing={2}>
          {/* Course ID */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Course ID"
              name="courseId"
              value={formData.courseId}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Stream */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Stream"
              name="stream"
              value={formData.stream}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Course Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Course Name"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Medium */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Medium*
            </Typography>
            {["English", "Sinhala", "Tamil"].map((medium) => (
              <FormControlLabel
                key={medium}
                control={
                  <Checkbox
                    checked={formData.medium.includes(medium)}
                    onChange={() => handleCheckboxChange("medium", medium)}
                  />
                }
                label={medium}
              />
            ))}
          </Grid>

          {/* Course Assessment Criteria */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Course Assessment Criteria*
            </Typography>
            {[
              "Theory",
              "Practical",
              "Lab",
              "Assignment",
              "Exam",
              "Viva",
            ].map((criteria) => (
              <FormControlLabel
                key={criteria}
                control={
                  <Checkbox
                    checked={formData.assessmentCriteria.includes(criteria)}
                    onChange={() =>
                      handleCheckboxChange("assessmentCriteria", criteria)
                    }
                  />
                }
                label={criteria}
              />
            ))}
          </Grid>

          {/* Location */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Location*
            </Typography>
            {["Class Room", "Computer Lab"].map((location) => (
              <FormControlLabel
                key={location}
                control={
                  <Checkbox
                    checked={formData.location.includes(location)}
                    onChange={() => handleCheckboxChange("location", location)}
                  />
                }
                label={location}
              />
            ))}
          </Grid>

          {/* Resources */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Resources*
            </Typography>
            {[
              "Vehicle",
              "Gantry",
              "Yard",
              "Onboard",
              "Sea Training",
              "Ship Simulator",
            ].map((resource) => (
              <FormControlLabel
                key={resource}
                control={
                  <Checkbox
                    checked={formData.resources.includes(resource)}
                    onChange={() =>
                      handleCheckboxChange("resources", resource)
                    }
                  />
                }
                label={resource}
              />
            ))}
          </Grid>

          {/* Fees */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Fees"
              name="fees"
              type="number"
              value={formData.fees}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Payment Conditions */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Payment Conditions"
              name="paymentConditions"
              value={formData.paymentConditions}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ marginY: 2 }} />

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button variant="outlined" color="primary">
            Back
          </Button>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CourseRegistration; // Fixed export name
