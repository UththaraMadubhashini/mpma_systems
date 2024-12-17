import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
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
import MenuBookIcon from "@mui/icons-material/MenuBook"; // Add this import for the new icon


const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Administration Management", icon: <PeopleIcon />, path: "/admin-management" },
  { text: "Course & Batch Management", icon: <ClassIcon />, path: "/costIn" },
  { text: "Lecturer Management", icon: <MenuBookIcon />, path: "/lecturermanagement" }, // New menu item
  { text: "Student Management", icon: <SchoolIcon />, path: "/studentManagement" },
  { text: "Exams & Certificates", icon: <ReceiptIcon />, path: "/exam" },
  { text: "OJT", icon: <WorkIcon />, path: "/ojt" },
  { text: "Payments Management", icon: <PaymentsIcon />, path: "/payments-management" },
  { text: "Transport Management", icon: <DriveEtaIcon />, path: "/transport-management" },
  { text: "Resource Management", icon: <DashboardIcon />, path: "/resource-management" },
  { text: "Off-boarding", icon: <LogoutIcon />, path: "/off-boarding" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "300px",
        backgroundColor: "#ffffff",
        height: "100vh", // Adjust height to account for Header
        position: "fixed",
        top: "110px", // Match Header height
        left: "10px",
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                marginBottom: "6px", 
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
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
