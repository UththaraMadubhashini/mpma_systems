import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function Application2() {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    dob: "",
    department: "",
    seaService: "",
    company: "",
    swimmingAbility: false,
    isSLPAEmployee: false,
    designation: "",
    division: "",
    serviceNo: "",
    sectionUnit: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle "No" button for employment details
  const handleSLPAChange = (isEmployee) => {
    if (!isEmployee) {
      // Clear SLPA employee-specific fields when "No" is selected
      setFormData((prevData) => ({
        ...prevData,
        isSLPAEmployee: false,
        designation: "",
        division: "",
        serviceNo: "",
        sectionUnit: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        isSLPAEmployee: true,
      }));
    }
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
      {/* Section Title */}
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Academic Details
      </Typography>

      {/* Select Courses Section */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", marginBottom: 2 }}
      >
        Select Courses
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        {[...Array(5)].map((_, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              fullWidth
              placeholder={`Course ${index + 1}`}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Proficiency in Driving Heavy Vehicle Section */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", marginBottom: 2 }}
      >
        Proficiency in Driving Heavy Vehicle{" "}
        <Typography
          component="span"
          variant="body2"
          sx={{ fontStyle: "italic" }}
        >
          (for Equipment Operator Training Program Only)
        </Typography>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="D/L No"
            name="dlNo"
            value={formData.dlNo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Class"
            name="class"
            value={formData.class}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Date of Issue"
            placeholder="DD/MM/YYYY"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        </Grid>


      {/* Proficiency in Sea Services Section */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 2 }}
      >
        Proficiency in Sea Services{" "}
        <Typography
          component="span"
          variant="body2"
          sx={{ fontStyle: "italic" }}
        >
          (for Sea Service Only)
        </Typography>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Department/Rank"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Sea Services (Year/Months if applicable)"
            name="seaService"
            value={formData.seaService}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Company (if Employed)"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      {/* Swimming Ability */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="swimmingAbility"
                checked={formData.swimmingAbility}
                onChange={handleChange}
              />
            }
            label="Swimming Ability"
          />
        </Grid>
      </Grid>

      {/* Employment Details */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Employment Details <em>(for SLPA Employees Only)</em>
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isSLPAEmployee}
                onChange={() => handleSLPAChange(true)}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!formData.isSLPAEmployee}
                onChange={() => handleSLPAChange(false)}
              />
            }
            label="No"
          />
        </Grid>
      </Grid>

      {/* Conditional Employment Fields */}
      {formData.isSLPAEmployee && (
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Division"
              name="division"
              value={formData.division}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Service No"
              name="serviceNo"
              value={formData.serviceNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Section/Unit"
              name="sectionUnit"
              value={formData.sectionUnit}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      )}


    </Box>
  );
}

export default Application2;