import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from "react-router-dom";
import SideBarAdmin from "../../Components/SlideBar/sideBarAdmin";


function Administration() {
  return (
    <div>
        <SideBarAdmin />
      {/* <Header /> */}
      <Container maxWidth="lg" sx={{ marginTop: "20px", marginLeft:"330px" }}>
        {/* Page Title */}
        <Typography variant="h5" color="primary" gutterBottom sx={{marginLeft:"-20px"}}>
          Administration Management
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom sx={{marginLeft:"-20px"}}>
          Home / Administration Management
        </Typography>

        {/* Button Section */}
        <Box 
          
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "20px",
            marginLeft:"-20px"
          }}
        >
          {/* Institute setup Button */}
          <Button
            component={Link}
            to="/institute-setup"
            variant="outlined"
            startIcon={<AccountBalanceIcon />}
            sx={{
              width: "200px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Institute Setup
          </Button>

          {/* Batch Registration Button */}
          <Button
            component={Link}
            // to="/batch-registration"
            variant="outlined"
            // startIcon={<AssignmentIcon />}
            sx={{
              width: "200px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            {/* Batch Registration */}
          </Button>

          {/* Cost-In Button */}
          <Button
            variant="outlined"
            // startIcon={<AttachMoneyIcon />}
            sx={{
              width: "200px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            {/* Cost - In */}
          </Button>

          {/* Add New Button */}
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{
              width: "200px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Add New
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Administration;
