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

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Administration Management", icon: <PeopleIcon />, path: "/admin-management", disabled: true },
  { text: "Course & Batch Management", icon: <ClassIcon />, path: "/course" },
  { text: "Student Management", icon: <SchoolIcon />, path: "/student-management", disabled: true },
  { text: "Exams & Certificates", icon: <ReceiptIcon />, path: "/exams-certificates", disabled: true },
  { text: "OJT", icon: <WorkIcon />, path: "/ojt", disabled: true },
  { text: "Payments Management", icon: <PaymentsIcon />, path: "/payments-management", disabled: true },
  { text: "Transport Management", icon: <DriveEtaIcon />, path: "/transport-management", disabled: true },
  { text: "Resource Management", icon: <DashboardIcon />, path: "/resource-management", disabled: true },
  { text: "Off-boarding", icon: <LogoutIcon />, path: "/off-boarding", disabled: true },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        width: "300px",
        backgroundColor: "#ffffff",
        height: "100vh", // Set the height to full viewport height
        overflowY: "auto",
        position: "fixed", // Fixed position to stay on the screen while scrolling
        top: "110px", // Adjust for header height (assuming 80px for the header)
        left: 0,
        zIndex: 1200, // Ensure the sidebar appears above other content
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
  );
};

export default Sidebar;
