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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editCourse, setEditCourse] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/courses", {
          params: { status: "active" },
        });
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses data:", error);
        setLoading(false);
        showSnackbar("Failed to fetch courses data", "error");
      }
    };

    fetchCourses();
  }, []);

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleEdit = (courseId) => {
    const courseToEdit = courses.find((course) => course.course_id === courseId);
    setEditCourse(courseToEdit);
    reset(courseToEdit);
    setOpen(true);
  };

  const handleArchive = async (courseId) => {
    if (window.confirm(`Are you sure you want to archive Course ID: ${courseId}?`)) {
      try {
        await axios.put(`http://localhost:3001/api/courses/${courseId}`, {
          status: "archived",
        });
        setCourses((prevCourses) => prevCourses.filter((course) => course.course_id !== courseId));
        showSnackbar(`Course ID: ${courseId} archived successfully.`, "success");
      } catch (error) {
        console.error("Error archiving course:", error);
        showSnackbar("Failed to archive the course", "error");
      }
    }
  };

  const handleUpdate = async (data) => {
    if (!editCourse || !editCourse.course_id) {
      showSnackbar("Invalid course selected for editing.", "error");
      return;
    }

    try {
      await axios.put(`http://localhost:3001/api/courses/${editCourse.course_id}`, data);
      setCourses((prevCourses) =>
        prevCourses.map((course) => (course.course_id === editCourse.course_id ? { ...course, ...data } : course))
      );
      showSnackbar("Course updated successfully!", "success");
      handleClose();
    } catch (error) {
      console.error("Error updating course:", error);
      showSnackbar("Failed to update the course.", "error");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setEditCourse(null);
    reset();
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10, paddingBottom: 2, marginLeft: 35 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Course & Batch Management
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ marginTop: "5px" }}>
        Home / Course & Batch Management / <b>All Courses</b>
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 4, maxHeight: 500, overflow: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold", backgroundColor: "#150095" }}>
                  Course ID
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold", backgroundColor: "#150095" }}>
                  Stream
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold", backgroundColor: "#150095" }}>
                  Course Name
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold", backgroundColor: "#150095" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.course_id}>
                  <TableCell>{course.course_id}</TableCell>
                  <TableCell>{course.stream}</TableCell>
                  <TableCell>{course.course_name}</TableCell>
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
          <form onSubmit={handleSubmit(handleUpdate)}>
            <Controller
              name="course_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} margin="dense" label="Course Name" fullWidth />
              )}
            />
            <Controller
              name="stream"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} margin="dense" label="Stream" fullWidth />
              )}
            />
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default AllCourses;
