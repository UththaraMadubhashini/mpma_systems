import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import axios from "axios";

const BatchRegistration = () => {
  const [courseId, setCourseId] = useState("");
  const [courseDetails, setCourseDetails] = useState(null);
  const [batches, setBatches] = useState([]);
  const [error, setError] = useState("");

  // Fetch course details based on course ID
  const fetchCourseDetails = async () => {
    if (!courseId.trim()) {
      alert("Please enter a valid Course ID");
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3001/api/courses/${courseId}`);
      setCourseDetails(response.data);
    } catch (error) {
      console.error("Error fetching course details:", error);
      alert("Failed to fetch course details. Please check the Course ID.");
    }
  };

  // Add a new batch
  const handleAddBatch = () => {
    if (!courseDetails) {
      alert("Please fetch course details before adding a batch.");
      return;
    }
    const newBatch = {
      id: batches.length + 1,
      name: `Batch ${batches.length + 1}`,
    };
    setBatches([...batches, newBatch]);
  };

  return (

    <Container maxWidth="md" sx={{ marginTop: 4, paddingBottom: 4 }}>
     

    <Box sx={{ padding: 4, display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Page Title */}
      <Typography variant="h5" fontWeight="bold"  gutterBottom sx={{ marginTop: "20px" }}>
        Course & Batch Management
      </Typography>
      <Typography variant="subtitle1">
        Home / Course & Batch Management / Batch Registration
      </Typography>

      {/* Course ID Input Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          label="Course ID"
          variant="outlined"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        />
        <Button variant="contained" onClick={fetchCourseDetails}>
          Get Course Details
        </Button>
      </Box>

      {/* Course Details Display */}
      {courseDetails && (
        <Box
          sx={{
            border: "1px solid #1976d2",
            borderRadius: 2,
            padding: 2,
          }}
        >
          <Typography variant="h6">Course Details</Typography>
          <Typography variant="body1">Course Name: {courseDetails.course_name}</Typography>
          <Typography variant="body1">Stream: {courseDetails.stream}</Typography>
          <Typography variant="body1">Duration: {courseDetails.duration_t} {courseDetails.duration_type}</Typography>
          <Typography variant="body1">Fees: ${courseDetails.fees}</Typography>
        </Box>
      )}

      {/* Batch Registration Section */}
      <Box
        sx={{
          border: "1px solid #1976d2",
          borderRadius: 2,
          padding: 2,
          height: "400px",
          overflowY: "auto",
        }}
      >
        {/* Add New Batch Button */}
        <Button
          variant="outlined"
          onClick={handleAddBatch}
          sx={{ marginBottom: 2 }}
        >
          Add New Batch
        </Button>

        {/* Batch List */}
        {batches.length === 0 ? (
          <Typography variant="body2" color="textSecondary">
            No batches available. Click "Add New Batch" to get started.
          </Typography>
        ) : (
          batches.map((batch) => (
            <Card key={batch.id} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="body1">{batch.name}</Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Box>

      {/* Navigation Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined">Back</Button>
        <Button variant="contained">Next</Button>
      </Stack>
    </Box>
    </Container>
  );
};

export default BatchRegistration;
