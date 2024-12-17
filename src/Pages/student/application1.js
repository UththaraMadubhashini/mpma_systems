import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Snackbar, Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Application2 from "../student/application2";
import Application3 from "../student/application3";

function Application1() {
  const [countryCode, setCountryCode] = useState("+94");

  const navigate = useNavigate();

  // State to manage whether PP or NIC is selected
  const [isPP, setIsPP] = useState(false);

  // Handle NIC selection
  const handleNICChange = () => {
    setIsPP(false); // Deselect PP when NIC is selected
  };

  // Handle PP selection
  const handlePPChange = () => {
    setIsPP(true); // Deselect NIC when PP is selected
  };

  const [openSnackbar, setOpenSnackbar] = useState(false); // State to manage Snackbar visibility

  const [formData, setFormData] = useState({
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    console.log(formData);

    // Show success message
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: "auto",
        margin: "auto",
        marginLeft: "330px",
        marginTop: "85px",
      }}
    >
      {/* Section Title */}
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Biographical Details
      </Typography>

      <Grid container spacing={2}>
        {/* Full Name */}
        <Grid item xs={12}>
          <TextField fullWidth label="Full Name" required />
        </Grid>

        {/* NIC and PP */}
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox checked={!isPP} onChange={handleNICChange} />}
            label="NIC"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox checked={isPP} onChange={handlePPChange} />}
            label="PP"
          />
        </Grid>

        {/* NIC Number or PP details */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={isPP ? "Passport Number" : "NIC Number"}
            required
          />
        </Grid>

        {/* Nationality and Country - Conditionally Enabled */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Nationality"
            disabled={!isPP} // Enabled only for PP
            required={isPP}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Country"
            disabled={!isPP} // Enabled only for PP
            required={isPP}
          />
        </Grid>

       {/* Date of Birth */}
       <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date of Birth"
            required
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        {/* CDC Number */}
        <Grid item xs={12}>
          <TextField fullWidth label="CDC Number" />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          <TextField fullWidth label="Address" required />
        </Grid>

        {/* Contact Numbers */}
        <Grid item xs={6}>
          <TextField fullWidth label="Contact No (Residence)" required />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Contact No (Mobile)"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FormControl variant="standard">
                    <Select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      sx={{ minWidth: 80 }}
                    >
                      <MenuItem value="+94">+94</MenuItem>
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+44">+44</MenuItem>
                      <MenuItem value="+61">+61</MenuItem>
                      <MenuItem value="+91">+91</MenuItem>
                    </Select>
                  </FormControl>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Email Address */}
        <Grid item xs={12}>
          <TextField fullWidth label="Email Address" type="email" required />
        </Grid>

        {/* Emergency Contact */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Details of the person to be notified in an emergency
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Name" required />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Contact No"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FormControl variant="standard">
                    <Select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      sx={{ minWidth: 80 }}
                    >
                      <MenuItem value="+94">+94</MenuItem>
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+44">+44</MenuItem>
                      <MenuItem value="+61">+61</MenuItem>
                      <MenuItem value="+91">+91</MenuItem>
                    </Select>
                  </FormControl>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Address" required />
        </Grid>
      </Grid>
      
      <Application2/>
      <Application3/>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 3,
        }}
      >
        <Button variant="outlined" color="primary" onClick={() => navigate("/studentmanagement")}>
          Back
        </Button>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

            {/* Success Message Snackbar */}
            <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Snackbar disappears after 3 seconds
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Successfully registered!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Application1;