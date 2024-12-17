import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../SlideBar/sideBar";
import Header from "../Header/Header"; // Import the Header component
import { Outlet } from "react-router-dom";

const Layout = () => {
  const drawerWidth = 240; // Sidebar width

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <Header />

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebar
          sx={{
            width: drawerWidth,
            flexShrink: 0,
          }}
        />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            overflowY: "auto",
          }}
        >
          {/* Render child routes */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;