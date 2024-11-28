import React from "react";
import {
  Container,
  Typography
} from "@mui/material";


function Dashboard() {
  return (
    <div>
      {/* <Header /> */}
      <Container maxWidth="lg" sx={{ marginTop: "-15px", marginLeft:"275px" }}>
        {/* Page Title */}
        <Typography variant="h5" color="primary" gutterBottom sx={{marginLeft:"-20px"}}>
          Course & Batch Management Dashboard
        </Typography>

        
      </Container>
    </div>
  );
}

export default Dashboard;
