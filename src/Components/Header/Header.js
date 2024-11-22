import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none", padding: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "#150095", fontWeight: "bold" }}>
          MPMA Portal
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ marginRight: 2, color: "#150095" }}>
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
  );
}

export default Header;
