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
  MenuItem,
} from "@mui/material";

const durations = ["Full Day", "Half Day", "Weeks", "Months"];
const days = ["Week Days", "Week Ends", "Both"];
const sessions = ["Full Day", "Half Day"];
const maxLectureHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const categoryHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const breakevenOptions = [10, 15, 20, 25, 30];
const maxStudentOptions = [10, 20, 30, 40, 50];

function CourseRegistration() {
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
    duration: "",
    durationType: "",
    day: "",
    dayType: "",
    session: "",
    sessionType: "",
    maxLectureHours: "",
    categoryA: "",
    categoryB: "",
    categoryC: "",
    breakeven: "",
    maxStudentCount: "",
    entryRequirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      <Typography variant="h5" color="primary" gutterBottom sx={{ marginTop: "100px" }}>
        Course & Batch Management
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ marginTop: "5px" }}>
        Home / Course & Batch Management / <b>Course Registration</b>
      </Typography>

      <Box sx={{ padding: 3, border: "1px solid #ccc", borderRadius: 2, marginTop: 3 }}>
        <Typography variant="h6" color="textPrimary" sx={{ marginTop: 2 }}>
          Appendix A
        </Typography>
        <Grid container spacing={2}>
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
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Course Assessment Criteria*
            </Typography>
            {["Theory", "Practical", "Lab", "Assignment", "Exam", "Viva"].map((criteria) => (
              <FormControlLabel
                key={criteria}
                control={
                  <Checkbox
                    checked={formData.assessmentCriteria.includes(criteria)}
                    onChange={() => handleCheckboxChange("assessmentCriteria", criteria)}
                  />
                }
                label={criteria}
              />
            ))}
          </Grid>
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
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Resources*
            </Typography>
            {["Vehicle", "Gantry", "Yard", "Onboard", "Sea Training", "Ship Simulator"].map(
              (resource) => (
                <FormControlLabel
                  key={resource}
                  control={
                    <Checkbox
                      checked={formData.resources.includes(resource)}
                      onChange={() => handleCheckboxChange("resources", resource)}
                    />
                  }
                  label={resource}
                />
              )
            )}
          </Grid>
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

        <Typography variant="h6" color="textPrimary" sx={{ marginTop: 2 }}>
          Appendix B
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >
              {durations.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="select"
              name="durationSelect"
              value={formData.durationType}
              onChange={handleChange}
            >
              {durations.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Day"
              name="day"
              value={formData.day}
              onChange={handleChange}
              required
            >
              {days.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="select"
              name="daySelect"
              value={formData.dayType}
              onChange={handleChange}
            >
              {days.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Sessions"
              name="session"
              value={formData.session}
              onChange={handleChange}
              required
            >
              {sessions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Select"
              name="sessionSelect"
              value={formData.sessionType}
              onChange={handleChange}
            >
              {sessions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="No of Maximum Lecture Hours"
              name="maxLectureHours"
              value={formData.maxLectureHours}
              onChange={handleChange}
              required
            >
              {maxLectureHours.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Typography variant="h6" color="textPrimary" gutterBottom  sx={{ marginTop: 2 }}>
        Appendix C
      </Typography>

        <Grid container spacing={2}>
          {/* Breakeven */}
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Breakeven"
              name="breakeven"
              value={formData.breakeven}
              onChange={handleInputChange}
              required
            >
              {breakevenOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Maximum Student Count */}
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Maximum Student Count"
              name="maxStudentCount"
              value={formData.maxStudentCount}
              onChange={handleInputChange}
              required
            >
              {maxStudentOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Entry Requirement */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Entry Requirement"
              name="entryRequirement"
              value={formData.entryRequirement}
              onChange={handleInputChange}
              multiline
              rows={4}
              placeholder="Type Here..."
              required
            />
          </Grid>
        </Grid>
        
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
        <Button variant="outlined" color="primary">
          Back
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </Container>
  );
}

export default CourseRegistration;
