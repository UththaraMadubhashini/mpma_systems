import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
import SchoolIcon from "@mui/icons-material/School";
import PaymentsIcon from "@mui/icons-material/Payments";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WorkIcon from "@mui/icons-material/Work";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../Assets/logo.png";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Administration Management", icon: <PeopleIcon />, path: "/administration" },
  { text: "Course & Batch Management", icon: <ClassIcon />, path: "/course", disabled: true },
  { text: "Student Management", icon: <SchoolIcon />, path: "/student-management", disabled: true },
  { text: "Exams & Certificates", icon: <ReceiptIcon />, path: "/exams-certificates", disabled: true },
  { text: "OJT", icon: <WorkIcon />, path: "/ojt", disabled: true },
  { text: "Payments Management", icon: <PaymentsIcon />, path: "/payments-management", disabled: true },
  { text: "Transport Management", icon: <DriveEtaIcon />, path: "/transport-management", disabled: true },
  { text: "Resource Management", icon: <DashboardIcon />, path: "/resource-management", disabled: true },
  { text: "Off-boarding", icon: <LogoutIcon />, path: "/off-boarding", disabled: true },
];

const SideBarAdmin = () => {
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          padding: 2,
          zIndex: 1201,
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

      <Box
        sx={{
          width: "300px",
          backgroundColor: "#ffffff",
          height: "100vh",
          overflowY: "auto",
          position: "fixed",
          top: "110px",
          left: 0,
          zIndex: 1200,
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              {item.disabled ? (
                <ListItemButton
                  disabled
                  sx={{
                    marginBottom: "8px",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    cursor: "not-allowed",
                  }}
                >
                  <ListItemIcon sx={{ color: "#b0b0b0", minWidth: "40px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "#b0b0b0",
                    }}
                  />
                </ListItemButton>
              ) : (
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    marginBottom: "8px",
                    border: location.pathname === item.path ? "1px solid #150095" : "1px solid #e0e0e0",
                    backgroundColor: location.pathname === item.path ? "#f0f7ff" : "white",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: location.pathname === item.path ? "#150095" : "#000",
                      minWidth: "40px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      fontWeight: location.pathname === item.path ? "bold" : "normal",
                      color: location.pathname === item.path ? "#150095" : "#000",
                    }}
                  />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default SideBarAdmin;
