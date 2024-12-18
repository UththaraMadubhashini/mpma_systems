import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import SideBarAdmin from "../../Components/SlideBar/sideBarAdmin";

function InstituteSetup() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [open, setOpen] = useState(false);

  // Fetch courses from the database
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/get-courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleView = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <SideBarAdmin />
      <Container maxWidth="md" sx={{ marginTop: 0, paddingBottom: 4 }}>
        <Typography variant="h5" color="primary" gutterBottom>
          Administration Management
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          gutterBottom
          sx={{ marginTop: "5px" }}
        >
          Home / Administration Management / <b>Institute Setup</b>
        </Typography>

        <Box sx={{ marginTop: 3 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Course ID</b>
                  </TableCell>
                  <TableCell>
                    <b>Course Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Stream</b>
                  </TableCell>
                  <TableCell>
                    <b>Action</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.courseId}>
                    <TableCell>{course.courseId}</TableCell>
                    <TableCell>{course.courseName}</TableCell>
                    <TableCell>{course.stream}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleView(course)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Course Details Dialog */}
        {selectedCourse && (
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogTitle>Course Details</DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Course ID:</b> {selectedCourse.courseId}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Stream:</b> {selectedCourse.stream}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    <b>Course Name:</b> {selectedCourse.courseName}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    <b>Medium:</b> {selectedCourse.medium.join(", ")}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    <b>Location:</b> {selectedCourse.location.join(", ")}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    <b>Resources:</b> {selectedCourse.resources.join(", ")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Fees:</b> {selectedCourse.fees}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Payment Conditions:</b> {selectedCourse.paymentConditions}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Duration:</b> {selectedCourse.durationT} (
                    {selectedCourse.durationType})
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Days:</b> {selectedCourse.dayT} ({selectedCourse.dayType})
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Session:</b> {selectedCourse.sessionT} (
                    {selectedCourse.sessionType})
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Max Lecture Hours:</b> {selectedCourse.maxLectureHours}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Breakeven Point:</b> {selectedCourse.breakeven}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    <b>Max Student Count:</b> {selectedCourse.maxStudentCount}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    <b>Entry Requirement:</b> {selectedCourse.entryRequirement}
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" variant="outlined">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
    </>
  );
}

export default InstituteSetup;
