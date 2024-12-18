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
} from "@mui/material";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, paddingBottom: 4 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        All Registered Courses
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Course ID</TableCell>
                <TableCell>Stream</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Fees</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Max Students</TableCell>
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
                  <TableCell>{course.fees}</TableCell>
                  <TableCell>
                    {course.duration_t} ({course.duration_type})
                  </TableCell>
                  <TableCell>{course.max_student_count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default AllCourses;
