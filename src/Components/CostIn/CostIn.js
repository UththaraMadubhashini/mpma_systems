import React, { useState } from "react";
import TariffForm from "./TariffForm";
import CostIn2 from "./CostIn2";
import CostIn3 from "./CostIn3";
import CostIn4 from "./CostIn4";
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
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Reusable Editable Table Component
const EditableTable = ({ rows, columns, handleInputChange, setRows }) => (
  <TableContainer component={Paper} sx={{ mb: 3 }}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((col, index) => (
            <TableCell key={index}>{col.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex}>
                <TextField
                  fullWidth
                  type={col.type || "text"}
                  value={row[col.field] || ""}
                  onChange={(e) =>
                    handleInputChange(rows, setRows, rowIndex, col.field, e.target.value)
                  }
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const CompleteCourseManagement = () => {
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
    alert("Form submitted! Check the console for details.");
  };

  const developmentColumns = [
    { label: "Description", field: "description" },
    { label: "Nos", field: "nos", type: "number" },
    { label: "Rate per hr / Cost", field: "rate", type: "number" },
  ];

  const deliveryColumns = [
    { label: "Human Resource", field: "role" },
    { label: "Hrs", field: "hrs", type: "number" },
    { label: "Rate per hr./Cost", field: "rate", type: "number" },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Complete Course Management
      </Typography>

      <Typography variant="h5" color="primary" gutterBottom sx={{ marginTop: "25px" }}>
        Course & Batch Management
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ marginTop: "5px" }}>
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
      <EditableTable
        rows={developmentRows}
        columns={developmentColumns}
        handleInputChange={handleTableInputChange}
        setRows={setDevelopmentRows}
      />

      {/* Course Delivery */}
      <Typography variant="h6" gutterBottom>
        B. Course Delivery
      </Typography>
      <EditableTable
        rows={deliveryRows}
        columns={deliveryColumns}
        handleInputChange={handleTableInputChange}
        setRows={setDeliveryRows}
      />
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button startIcon={<AddCircleOutlineIcon />} variant="outlined" onClick={handleAddDeliveryRow}>
          Add More
        </Button>
      </Box>

      <TariffForm />
      <CostIn2 />
      <CostIn3 />
      <CostIn4 />

      {/* Submit Button */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default CompleteCourseManagement;
