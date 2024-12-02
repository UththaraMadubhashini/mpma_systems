import React, { useState } from "react";
import CostIn2 from "./CostIn2";
import CostIn3 from "./CostIn3"
import CostIn4 from "./CostIn4"
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  /*IconButton,*/
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CompleteCourseManagement = () => {
 /* const [CourseBatchManagement, setCoursebatchManagement] = useState({
    CourseBatchManagement:"",
  })*/
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    participants: "",
    duration: "",
    customerDivision: "",
  });

  const [developmentRows, setDevelopmentRows] = useState([
    { description: "Resource Personnel - no of panel meetings", nos: "", rate: "" },
    { description: "Resource Personnel - no of personnel", nos: "", rate: "" },
    { description: "Value of refreshment", nos: "", rate: "" },
    { description: "Documentation", nos: "", rate: "" },
    { description: "Transport (Km)", nos: "", rate: "" },
  ]);

  const [deliveryRows, setDeliveryRows] = useState([
    { role: "S. T. M", hrs: "", rate: "" },
    { role: "T. M", hrs: "", rate: "" },
    { role: "A. T. M", hrs: "", rate: "" },
    { role: "T. O", hrs: "", rate: "" },
    { role: "Laborer", hrs: "", rate: "" },
  ]);

  const [slpaRows, setSlpaRows] = useState([
    { category: "Category – A", hrs: "", rate: "" },
    { category: "Category – B", hrs: "", rate: "" },
    { category: "Category – C", hrs: "", rate: "" },
  ]);

  const [outsideRows, setOutsideRows] = useState([
    { category: "Category – A", hrs: "", rate: "" },
    { category: "Category – B", hrs: "", rate: "" },
    { category: "Category – C", hrs: "", rate: "" },
    { category: "Co-ordination", hrs: "", rate: "" },
  ]);


    const [rows, setRows] = useState([
      { description: "Transport - Km", qty: "", rate: "", amount: "" },
      { description: "Tea", qty: "", rate: "", amount: "" },
      { description: "Meals", qty: "", rate: "", amount: "" },
      { description: "Certificates", qty: "", rate: "", amount: "" },
      { description: "Teaching Aids / Multimedia", qty: "", rate: "", amount: "" },
      { description: "Incidental Cost", qty: "", rate: "", amount: "" },
      { description: "Maintenance Cost", qty: "", rate: "", amount: "" },
      { description: "Administration Cost", qty: "", rate: "", amount: "" },
    ]);

  /*const [coordination, setCoordination] = useState({ hrs: "", rate: "" });*/

  const handleCourseInfoChange = (field, value) => {
    setCourseInfo({ ...courseInfo, [field]: value });
  };

  const handleTableInputChange = (rows, setRows, index, field, value) => {
    const updatedRows = rows.map((row, i) => (i === index ? { ...row, [field]: value } : row));
    setRows(updatedRows);
  };

  const handleAddDeliveryRow = () => {
    setDeliveryRows([...deliveryRows, { role: "", hrs: "", rate: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Course Information:", courseInfo);
    console.log("Course Development Data:", developmentRows);
    console.log("Course Delivery Data:", deliveryRows);
    console.log("SLPA Resource Personnel:", slpaRows);
    console.log("Outside Resource Personnel:", outsideRows);
   /* console.log("Coordination:", coordination);*/
    alert("Form submitted! Check the console for details.");
  };

 /* const handleBack = () => {
    alert("Navigating back...");
  };*/

  return (
    
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Complete Course Management
      </Typography>

      {/* Header */}
      <Typography variant="h5" color="primary" gutterBottom sx={{ marginTop: "25px"}}>
          Course & Batch Management
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom sx={{ marginTop: "5px",}}>
          Home / Course & Batch Management / <b>Cost In</b>
        </Typography>
        

      {/* Course Information */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Course Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Course Name"
              value={courseInfo.courseName}
              onChange={(e) => handleCourseInfoChange("courseName", e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="No of Participants"
              type="number"
              value={courseInfo.participants}
              onChange={(e) => handleCourseInfoChange("participants", e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Duration"
              value={courseInfo.duration}
              onChange={(e) => handleCourseInfoChange("duration", e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Customer / Division"
              value={courseInfo.customerDivision}
              onChange={(e) => handleCourseInfoChange("customerDivision", e.target.value)}
              required
            />
          </Grid>
        </Grid>
      </Box>

      {/* Course Development Work */}
      <Typography variant="h6" gutterBottom>
        A. Course Development Work
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Nos</TableCell>
              <TableCell>Rate per hr / Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {developmentRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.nos}
                    onChange={(e) =>
                      handleTableInputChange(developmentRows, setDevelopmentRows, index, "nos", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.rate}
                    onChange={(e) =>
                      handleTableInputChange(developmentRows, setDevelopmentRows, index, "rate", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Course Delivery */}
      <Typography variant="h6" gutterBottom>
        B. Course Delivery
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Human Resource</TableCell>
              <TableCell>Hrs</TableCell>
              <TableCell>Rate per hr./Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveryRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    fullWidth
                    value={row.role}
                    onChange={(e) => handleTableInputChange(deliveryRows, setDeliveryRows, index, "role", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.hrs}
                    onChange={(e) => handleTableInputChange(deliveryRows, setDeliveryRows, index, "hrs", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.rate}
                    onChange={(e) => handleTableInputChange(deliveryRows, setDeliveryRows, index, "rate", e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button startIcon={<AddCircleOutlineIcon />} variant="outlined" onClick={handleAddDeliveryRow}>
          Add More
        </Button>
      </Box>

      {/* SLPA Resource Personnel */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        SLPA - Resources Personnel
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Hrs</TableCell>
              <TableCell>Rate per hr./Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slpaRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.hrs}
                    onChange={(e) => handleTableInputChange(slpaRows, setSlpaRows, index, "hrs", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.rate}
                    onChange={(e) => handleTableInputChange(slpaRows, setSlpaRows, index, "rate", e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Outside Resource Personnel */}
      <Typography variant="h6" gutterBottom>
        Outside - Resource Personnel
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Hrs</TableCell>
              <TableCell>Rate per hr./Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {outsideRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.hrs}
                    onChange={(e) => handleTableInputChange(outsideRows, setOutsideRows, index, "hrs", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    fullWidth
                    value={row.rate}
                    onChange={(e) => handleTableInputChange(outsideRows, setOutsideRows, index, "rate", e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CostIn2 />
      <CostIn3 />
      <CostIn4 />
  
      {/* Submit Button*/}   
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>    
    </Container>
  );
};

export default CompleteCourseManagement;

