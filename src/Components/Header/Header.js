import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../Assets/logo.png";

function Header() {
  return (
    <>
      <AppBar
        position="fixed" // Makes the header fixed at the top
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          padding: 2,
          zIndex: 1201, // Ensures it appears above other components
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Left Section with Image and Custom Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="MPMA Logo"
              style={{
                height: 80,
                marginRight: 10,
                borderRadius: "50%",
              }}
            />
            {/* Text */}
            <Box>
              <div
                style={{
                  fontSize: "48px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "orange",
                  fontFamily: "'Kantumruy Pro', sans-serif",
                  lineHeight: "1",
                }}
              >
                MPMA
              </div>
              <div
                style={{
                  fontSize: "26px",
                  fontStyle: "italic",
                  color: "#150095",
                  fontFamily: "'Kantumruy Pro', sans-serif",
                  fontWeight: "500",
                }}
              >
                Management System
              </div>
            </Box>
          </Box>

          {/* Right Section with Buttons and Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{ marginRight: 5, color: "#150095", fontWeight: "bold" }}
            >
              MPMA Portal
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginRight: 5, color: "#150095", fontWeight: "bold" }}
            >
              Logout
            </Typography>
            <IconButton color="primary">
              <SettingsIcon />
            </IconButton>
            <IconButton color="primary">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content overlap */}
      <Box sx={{ height: "104px" }} />
    </>
  );
}

export default Header;