import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editCourse, setEditCourse] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/courses");
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses data:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

// Function to handle Edit Button
const handleEdit = (courseId) => {
  const courseToEdit = courses.find((course) => course.course_id === courseId);
  setEditCourse(courseToEdit); // Set the selected course data in state
  setOpen(true); // Open the dialog to edit course
};

// Function to handle Archive Button
const handleArchive = async (courseId) => {
  const confirmArchive = window.confirm(
    `Are you sure you want to archive Course ID: ${courseId}?`
  );
  if (confirmArchive) {
    try {
      await axios.delete(`http://localhost:3001/api/courses/${courseId}`);
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.course_id !== courseId)
      );
      alert(`Course ID: ${courseId} archived successfully.`);
    } catch (error) {
      console.error("Error archiving course:", error);
      alert("Failed to archive the course.");
    }
  }
};

// Function to handle Save Button in Edit Dialog
const handleUpdate = async () => {
  try {
    if (editCourse && editCourse.course_id) {
      await axios.put(`http://localhost:3001/api/courses/${editCourse.course_id}`, editCourse);
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.course_id === editCourse.course_id ? editCourse : course
        )
      );
      alert("Course updated successfully!");
      handleClose(); // Close the dialog
    }
  } catch (error) {
    console.error("Error updating course:", error);
    alert("Failed to update the course.");
  }
};

const handleClose = () => {
  setOpen(false);
  setEditCourse(null);
};

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10, paddingBottom: 2, marginLeft: 35 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Course & Batch Management
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        gutterBottom
        sx={{ marginTop: "5px" }}
      >
        Home / Course & Batch Management / <b>All Courses</b>
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ marginTop: 4, maxHeight: 500, overflow: "auto" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Course ID</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Stream</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Course Name</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Medium</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Location</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Resources</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Assessment Criteria</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Fees</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Payment Conditions</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Duration</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Day</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Session</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Max Lecture Hours</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Breakeven</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Max Students</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Entry Requirement</TableCell>
                <TableCell sx={{color: 'white', fontWeight:'bold', backgroundColor: '#150095'}}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.course_id}>
                  <TableCell>{course.course_id}</TableCell>
                  <TableCell>{course.stream}</TableCell>
                  <TableCell>{course.course_name}</TableCell>
                  <TableCell>
                    {Array.isArray(course.medium)
                      ? course.medium.join(", ")
                      : JSON.parse(course.medium || "[]").join(", ")}
                  </TableCell>
                  <TableCell>
                    {Array.isArray(course.location)
                      ? course.location.join(", ")
                      : JSON.parse(course.location || "[]").join(", ")}
                  </TableCell>
                  <TableCell>
                    {Array.isArray(course.resources)
                      ? course.resources.join(", ")
                      : JSON.parse(course.resources || "[]").join(", ")}
                  </TableCell>
                  <TableCell>
                    {Array.isArray(course.assessment_criteria)
                      ? course.assessment_criteria.join(", ")
                      : JSON.parse(course.assessment_criteria || "[]").join(", ")}
                  </TableCell>
                  <TableCell>{course.fees}</TableCell>
                  <TableCell>{course.payment_conditions}</TableCell>
                  <TableCell>
                    {course.duration_t} ({course.duration_type})
                  </TableCell>
                  <TableCell>
                    {course.day_t} ({course.day_type})
                  </TableCell>
                  <TableCell>
                    {course.session_t} ({course.session_type})
                  </TableCell>
                  <TableCell>{course.max_lecture_hours}</TableCell>
                  <TableCell>{course.breakeven}</TableCell>
                  <TableCell>{course.max_student_count}</TableCell>
                  <TableCell>{course.entry_requirement}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(course.course_id)}
                      sx={{ marginRight: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => handleArchive(course.course_id)}
                    >
                      Archive
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Edit Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Course</DialogTitle>
        <DialogContent>
        <TextField
            margin="dense"
            label="Course Name"
            fullWidth
            value={editCourse?.course_name || ""}
            onChange={(e) =>
              setEditCourse((prev) => ({ ...prev, course_name: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            label="Stream"
            fullWidth
            value={editCourse?.stream || ""}
            onChange={(e) =>
              setEditCourse((prev) => ({ ...prev, stream: e.target.value }))
            }
          />
          // Continue adding more fields as necessary...

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}

export default AllCourses;
