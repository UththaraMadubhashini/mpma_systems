import React from "react";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form2 from "../Lecturer/form2";
import Form3 from "../Lecturer/form3";


function Form1() {
    const navigate = useNavigate();
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
      {/* Form Heading */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Biographical Details
      </Typography>

      <Grid container spacing={2}>
        {/* Full Name */}
        <Grid item xs={12}>
          <TextField fullWidth label="Full Name" required variant="outlined" />
        </Grid>

        {/* NIC and PP */}
        <Grid item xs={6}>
          <TextField fullWidth label="NIC" required variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="PP" required variant="outlined" />
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

        {/* Address */}
        <Grid item xs={12}>
          <TextField fullWidth label="Address" required variant="outlined" />
        </Grid>
         {/* Contact Number */}
         <Grid item xs={12}>
          <TextField fullWidth label="Contact Number" required variant="outlined"
          />
        </Grid>

        {/* CDC No */}
        <Grid item xs={12}>
          <TextField fullWidth label="CDC No" variant="outlined" />
        </Grid>

        {/* CDC Category */}
        <Grid item xs={12}>
          <TextField fullWidth label="CDC Category" variant="outlined" />
        </Grid>

        {/* Vehicle Licence No */}
        <Grid item xs={12}>
          <TextField fullWidth label="Vehicle Licence No" variant="outlined" />
        </Grid>

        {/* Email */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            required
            variant="outlined"
          />
        </Grid>
        {/* Bank Details Section */}
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              textDecoration: 'underline',
              marginTop: 2,
            }}
          >Bank Details</Typography> </Grid>
          {/* Bank Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Bank Name"
            required
            variant="outlined"
          />
        </Grid>

        {/* Account Number */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Account No"
            required
            variant="outlined"
          />
        </Grid>
         {/* Branch and Branch Code */}
         <Grid item xs={12}>
          <TextField
            fullWidth
            label="Branch & Branch Code"
            required
            variant="outlined"
          />
        </Grid>
 
      </Grid>
      <Form2/>
      <Form3/>
      {/* Navigation Buttons */}
      <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
        }}
      >
        <Button variant="outlined" color="primary" onClick={() => navigate("/lecturermanagement")}>
          Back
        </Button>

        <Button variant="contained" color="primary" >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Form1;
