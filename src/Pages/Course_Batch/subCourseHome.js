import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link } from "react-router-dom";


function Course() {
  return (
    <div>
      {/* <Header /> */}
      <Container maxWidth="lg" sx={{ marginTop: "-15px", marginLeft:"275px" }}>
        {/* Page Title */}
        <Typography variant="h5" color="primary" gutterBottom sx={{marginLeft:"-20px"}}>
          Course & Batch Management
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom sx={{marginLeft:"-20px"}}>
          Home / Course & Batch Management
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
          {/* Course Registration Button */}
          <Button
            component={Link}
            to="/course-registration"
            variant="outlined"
            startIcon={<EventNoteIcon />}
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
            Course Registration
          </Button>

          {/* Batch Registration Button */}
          <Button
            variant="outlined"
            startIcon={<AssignmentIcon />}
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
            Batch Registration
          </Button>

          {/* Cost-In Button */}
          <Button
            variant="outlined"
            startIcon={<AttachMoneyIcon />}
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
            Cost - In
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

export default Course;
