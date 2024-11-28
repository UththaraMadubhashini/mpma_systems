import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  /*IconButton,*/
} from "@mui/material";
/*import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";*/
import axios from "axios";

const CostInPage = () => {
  // State for the main form
  const [formData, setFormData] = useState({
    courseName: "",
    participants: "",
    duration: "",
    customerDivision: "",
    panelMeetings: "",
    personnelCount: "",
    refreshmentValue: "",
    documentation: "",
    transport: "",
  });

  // State for SLPA and Outside Resource Personnel tables
  const [slpaRows, setSlpaRows] = useState([
    { category: "Category – A", hrs: "", rate: "" },
    { category: "Category – B", hrs: "", rate: "" },
    { category: "Category – C", hrs: "", rate: "" },
  ]);

  const [outsideRows, setOutsideRows] = useState([
    { category: "Category – A", hrs: "", rate: "" },
    { category: "Category – B", hrs: "", rate: "" },
    { category: "Category – C", hrs: "", rate: "" },
  ]);

  // Handlers for the main form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handlers for table rows
  const handleAddMore = (setRows, rows) => {
    setRows([...rows, { category: "New Category", hrs: "", rate: "" }]);
  };

  const handleInputChange = (e, index, rows, setRows) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedData = {
      ...formData,
      slpaRows,
      outsideRows,
    };

    try {
      const response = await axios.post(
        "http://localhost/backend/save_form.php",
        combinedData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <Box p={3} sx={{ maxWidth: 750, margin: "auto", bgcolor: "#f9f9f9", borderRadius: 8 }}>
      <Typography variant="h5" alig="center" mb={3}>
        Course & Batch Management Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Main Form Fields */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Course Name"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="No. of Participants"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Customer / Division"
              name="customerDivision"
              value={formData.customerDivision}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Typography variant="h6" mt={2} mb={1}>
            A. Course Development Work
          </Typography>
          <Grid item xs={6}>
            <TextField
              label="Resource Personnel - No of Panel Meetings"
              name="panelMeetings"
              value={formData.panelMeetings}
              onChange={handleChange}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Resource Personnel - No of Personnel"
              name="personnelCount"
              value={formData.personnelCount}
              onChange={handleChange}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Value of Refreshment"
              name="refreshmentValue"
              value={formData.refreshmentValue}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Documentation"
              name="documentation"
              value={formData.documentation}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Transport (Km)"
              name="transport"
              value={formData.transport}
              onChange={handleChange}
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>

        {/* SLPA - Resources Personnel */}
        <Typography variant="h6" mt={4} mb={2}>
          SLPA - Resources Personnel
        </Typography>
        <Grid container spacing={2}>
          {slpaRows.map((row, index) => (
            <React.Fragment key={`slpa-${index}`}>
              <Grid item xs={4}>
                <TextField
                  label="Category"
                  name="category"
                  value={row.category}
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Hrs"
                  name="hrs"
                  value={row.hrs}
                  onChange={(e) =>
                    handleInputChange(e, index, slpaRows, setSlpaRows)
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Rate per hr./ Cost"
                  name="rate"
                  value={row.rate}
                  onChange={(e) =>
                    handleInputChange(e, index, slpaRows, setSlpaRows)
                  }
                  fullWidth
                />
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddMore(setSlpaRows, slpaRows)}
            >
              Add More
            </Button>
          </Grid>
        </Grid>

        {/* Outside - Resources Personnel */}
        <Typography variant="h6" mt={4} mb={2}>
          Outside - Resources Personnel
        </Typography>
        <Grid container spacing={2}>
          {outsideRows.map((row, index) => (
            <React.Fragment key={`outside-${index}`}>
              <Grid item xs={4}>
                <TextField
                  label="Category"
                  name="category"
                  value={row.category}
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Hrs"
                  name="hrs"
                  value={row.hrs}
                  onChange={(e) =>
                    handleInputChange(e, index, outsideRows, setOutsideRows)
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Rate per hr./ Cost"
                  name="rate"
                  value={row.rate}
                  onChange={(e) =>
                    handleInputChange(e, index, outsideRows, setOutsideRows)
                  }
                  fullWidth
                />
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddMore(setOutsideRows, outsideRows)}
            >
              Add More
            </Button>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} textAlign="center" mt={4}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default CostInPage;
