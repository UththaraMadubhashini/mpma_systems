import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
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
  { text: "Administration Management", icon: <PeopleIcon />, path: "/admin-management" },
  { text: "Course & Batch Management", icon: <ClassIcon />, path: "/course-batch-management", selected: true },
  { text: "Student Management", icon: <SchoolIcon />, path: "/student-management" },
  { text: "Exams & Certificates", icon: <ReceiptIcon />, path: "/exams-certificates" },
  { text: "OJT", icon: <WorkIcon />, path: "/ojt" },
  { text: "Payments Management", icon: <PaymentsIcon />, path: "/payments-management" },
  { text: "Transport Management", icon: <DriveEtaIcon />, path: "/transport-management" },
  { text: "Resource Management", icon: <DashboardIcon />, path: "/resource-management" },
  { text: "Off-boarding", icon: <LogoutIcon />, path: "/off-boarding" },
];

function SideBar() {
  return (
    <Box
      sx={{
        width: "250px",
        backgroundColor: "#ffffff",
        boxShadow: "2px 0px 5px rgba(0,0,0,0.1)",
        padding: "16px",
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component="a"
              href={item.path}
              sx={{
                marginBottom: "8px",
                border: item.selected ? "1px solid #150095" : "1px solid #e0e0e0",
                backgroundColor: item.selected ? "#f0f7ff" : "white",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: item.selected ? "#150095" : "#000",
                  minWidth: "40px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: item.selected ? "bold" : "normal",
                  color: item.selected ? "#150095" : "#000",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideBar;
