import React from "react";
import { Box, Typography, Avatar, Grid, Paper, Button } from "@mui/material";

function Viewprofile({ user }) {
  // Sample user data if not passed as a prop
  const defaultUser = {
    fullName: "John Doe",
    nic: "123456789V",
    passportNumber: "N1234567",
    nationality: "Sri Lankan",
    country: "Sri Lanka",
    dateOfBirth: "1990-01-01",
    cdcNumber: "CDC789456",
    address: "123, Colombo, Sri Lanka",
    contactResidence: "+94 112345678",
    contactMobile: "+94 771234567",
    email: "john.doe@example.com",
    emergencyContact: {
      name: "Jane Doe",
      contact: "+94 774567890",
      address: "456, Galle, Sri Lanka",
    },
  };

  // Use default user data if none is provided
  const profileData = user || defaultUser;

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: 600,
        margin: "auto",
        marginTop: 5,
        borderRadius: 5,
      }}
    >
      {/* Profile Header */}
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        marginBottom={3}
      >
        <Avatar
          sx={{ width: 100, height: 100, marginBottom: 2 }}
          src="/path/to/default/profile.jpg" // Update with dynamic image path
        />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {profileData.fullName}
        </Typography>
      </Box>

      {/* Profile Details */}
      <Grid container spacing={2}>
        {/* NIC and Passport */}
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>NIC:</strong> {profileData.nic}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>Passport:</strong> {profileData.passportNumber}
          </Typography>
        </Grid>

        {/* Nationality and Country */}
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>Nationality:</strong> {profileData.nationality}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>Country:</strong> {profileData.country}
          </Typography>
        </Grid>

        {/* Date of Birth */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Date of Birth:</strong> {profileData.dateOfBirth}
          </Typography>
        </Grid>

        {/* CDC Number */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>CDC Number:</strong> {profileData.cdcNumber}
          </Typography>
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Address:</strong> {profileData.address}
          </Typography>
        </Grid>

        {/* Contact Numbers */}
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>Contact (Residence):</strong> {profileData.contactResidence}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>Contact (Mobile):</strong> {profileData.contactMobile}
          </Typography>
        </Grid>

        {/* Email */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Email:</strong> {profileData.email}
          </Typography>
        </Grid>

        {/* Emergency Contact */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
            Emergency Contact
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>Name:</strong> {profileData.emergencyContact.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            <strong>Contact:</strong> {profileData.emergencyContact.contact}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Address:</strong> {profileData.emergencyContact.address}
          </Typography>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button variant="outlined" color="primary" sx={{ marginRight: 2 }}>
          Edit Profile
        </Button>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
}

export default Viewprofile;