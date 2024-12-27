import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";

const durationsT = ["Full Day", "Half Day", "Weeks", "Months"];
const daysT = ["Week Days", "Week Ends", "Both"];
const sessionsT = ["Full Day", "Half Day"];

const durations = Array.from({ length: 50 }, (_, i) => i + 1);
const days = [5, 2, 7];
const sessions = Array.from({ length: 40 }, (_, i) => i + 1);

const maxLectureHours = Array.from({ length: 12 }, (_, i) => i + 1);
const breakevenOptions = [10, 15, 20, 25, 30];
const maxStudentOptions = [10, 20, 30, 40, 50];

function CourseRegistration() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      courseId: "",
      stream: "",
      courseName: "",
      medium: [],
      location: [],
      resources: [],
      assessmentCriteria: [],
      fees: "",
      paymentConditions: "",
      durationT: "",
      durationType: "",
      dayT: "",
      dayType: "",
      sessionT: "",
      sessionType: "",
      maxLectureHours: "",
      breakeven: "",
      maxStudentCount: "",
      entryRequirement: "",
    },
  });

  const [snackbar, setSnackbar] = React.useState({ open: false, message: "", severity: "success" });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3001/api/save-course", data);
      setSnackbar({ open: true, message: "Course saved successfully!", severity: "success" });
      reset();
    } catch (error) {
      console.error("Error saving course data:", error);
      setSnackbar({ open: true, message: "Failed to save course data.", severity: "error" });
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4, paddingBottom: 4 }}>
      <Typography variant="h5" color="primary" gutterBottom sx={{ marginTop: "100px" }}>
        Course & Batch Management
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ marginTop: "5px" }}>
        Home / Course & Batch Management / <b>Course Registration</b>
      </Typography>

      <Box sx={{ padding: 3, border: "1px solid #ccc", borderRadius: 2, marginTop: 3 }}>
      <Typography variant="h6" color="textPrimary" sx={{ margin: 2 }}>
          Appendix A
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="courseId"
                control={control}
                rules={{ required: "Course ID is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Course ID"
                    error={!!errors.courseId}
                    helperText={errors.courseId?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="stream"
                control={control}
                rules={{ required: "Stream is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Stream"
                    error={!!errors.stream}
                    helperText={errors.stream?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="courseName"
                control={control}
                rules={{ required: "Course Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Course Name"
                    error={!!errors.courseName}
                    helperText={errors.courseName?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Medium*
              </Typography>
              {"English,Sinhala,Tamil".split(",").map((medium) => (
                <Controller
                  key={medium}
                  name="medium"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value.includes(medium)}
                          onChange={(e) =>
                            field.onChange(
                              e.target.checked
                                ? [...field.value, medium]
                                : field.value.filter((val) => val !== medium)
                            )
                          }
                        />
                      }
                      label={medium}
                    />
                  )}
                />
              ))}
            </Grid>

            <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Course Assessment Criteria*
            </Typography>
            {[
              "Theory",
              "Practical",
              "Lab",
              "Assignment",
              "Exam",
              "Viva",
            ].map((criteria) => (
              <Controller
                key={criteria}
                name="assessmentCriteria"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value.includes(criteria)}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...field.value, criteria]
                            : field.value.filter((item) => item !== criteria);
                          field.onChange(newValue);
                        }}
                      />
                    }
                    label={criteria}
                  />
                )}
              />
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Location*
            </Typography>
            {["Class Room", "Computer Lab"].map((location) => (
              <Controller
                key={location}
                name="location"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value.includes(location)}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...field.value, location]
                            : field.value.filter((item) => item !== location);
                          field.onChange(newValue);
                        }}
                      />
                    }
                    label={location}
                  />
                )}
              />
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Resources*
            </Typography>
            {["Vehicle", "Gantry", "Yard", "Onboard", "Sea Training", "Ship Simulator"].map(
              (resource) => (
                <Controller
                  key={resource}
                  name="resources"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value.includes(resource)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...field.value, resource]
                              : field.value.filter((item) => item !== resource);
                            field.onChange(newValue);
                          }}
                        />
                      }
                      label={resource}
                    />
                  )}
                />
              )
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="fees"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Fees" type="number" required />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="paymentConditions"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Payment Conditions" />
              )}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" color="textPrimary" sx={{ marginTop: 2 }}>
          Appendix B
        </Typography>

        <Grid container spacing={2}>
          {/* Duration, Day, Session Fields */}
          {/* Similar fields can be added using Controller */}
        </Grid>
            

            <Grid item xs={12} sm={6}>
              <Controller
                name="fees"
                control={control}
                rules={{
                  required: "Fees are required",
                  validate: (value) => (!isNaN(value) || "Fees must be a number"),
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Fees"
                    error={!!errors.fees}
                    helperText={errors.fees?.message}
                  />
                )}
              />
            </Grid>

          </Grid>




          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 3 }}
          >
            Save Course
          </Button>
        </form>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CourseRegistration;
