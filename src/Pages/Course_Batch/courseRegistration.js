import React, { useState } from "react";
import axios from "axios";
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

const durationsT = ["Full Day", "Half Day", "Weeks", "Months"];
const daysT = ["Week Days", "Week Ends", "Both"];
const sessionsT = ["Full Day", "Half Day"];

const durations = Array.from({ length: 50 }, (_, i) => i + 1);
const days = [5, 2, 7];
const sessions = Array.from({ length: 40 }, (_, i) => i + 1);

const maxLectureHours = Array.from({ length: 12 }, (_, i) => i + 1);
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
    durationT: "",
    durationType: "",
    dayT: "",
    dayType: "",
    sessionT: "",
    sessionType: "",
    maxLectureHours: "",
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

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/save-course", formData);
      alert(response.data); 


      setFormData({
        courseId: "",
        stream: "",
        courseName: "",
        medium: [],
        location: [],
        resources: [],
        assessmentCriteria: [],
        fees: "",
        paymentConditions: "",
        durationT: "",
        durationType: "",
        dayT: "",
        dayType: "",
        sessionT: "",
        sessionType: "",
        maxLectureHours: "",
        breakeven: "",
        maxStudentCount: "",
        entryRequirement: "",
      });

    } catch (error) {
      console.error("Error saving course data:", error);
      alert("Failed to save course data");
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4, paddingBottom: 4 }}>
      <Typography variant="h5" color="primary" gutterBottom sx={{ marginTop: "100px" }}>
        Course & Batch Management
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        gutterBottom
        sx={{ marginTop: "5px" }}
      >
        Home / Course & Batch Management / <b>Course Registration</b>
      </Typography>

      <Box sx={{ padding: 3, border: "1px solid #ccc", borderRadius: 2, marginTop: 3 }}>
        <Typography variant="h6" color="textPrimary" sx={{ margin: 2 }}>
          Appendix A
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Course ID"
              name="courseId"
              value={formData.courseId}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Stream"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Course Name"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Payment Conditions"
              name="paymentConditions"
              value={formData.paymentConditions}
              onChange={handleChange}
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
              name="durationT"
              value={formData.durationT}
              onChange={handleChange}
              required
            >
              {durationsT.map((option) => (
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
              label="Duration Length"
              name="durationType"
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
              name="dayT"
              value={formData.dayT}
              onChange={handleChange}
              required
            >
              {daysT.map((option) => (
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
              label="Day Count"
              name="dayType"
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
              label="Session"
              name="sessionT"
              value={formData.sessionT}
              onChange={handleChange}
            >
              {sessionsT.map((option) => (
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
              label="Session Count"
              name="sessionType"
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
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Max Lecture Hours"
              name="maxLectureHours"
              value={formData.maxLectureHours}
              onChange={handleChange}
            >
              {maxLectureHours.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>    
          <Typography variant="h6" color="textPrimary" sx={{ margin: 2 }}>
          Appendix C
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Breakeven Point"
              name="breakeven"
              value={formData.breakeven}
              onChange={handleChange}
            >
              {breakevenOptions.map((option) => (
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
              label="Max Student Count"
              name="maxStudentCount"
              value={formData.maxStudentCount}
              onChange={handleChange}
            >
              {maxStudentOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Entry Requirement"
              name="entryRequirement"
              value={formData.entryRequirement}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
          onClick={handleSave}
        >
          Save Course
        </Button>
      </Box>
    </Container>
  );
}

export default CourseRegistration;
