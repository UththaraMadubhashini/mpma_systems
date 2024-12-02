import React from "react";
import { TextField, Typography, Box, Grid } from "@mui/material";

function ApprovalForm() {
  return (
    <Box mt={6}>
      <form>
        {/* Prepared By */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            Prepared By:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter name"
            id="preparedBy"
          />
        </Box>

        {/* Checked By */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            Checked By:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter name"
            id="checkedBy"
          />
        </Box>

        {/* Forwarded For Approval */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            Forwarded For Your Approval:
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body1">C. T. M:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter name"
                id="ctm"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">D. C. T. M 1:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter name"
                id="dctm1"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">D. C. T. M 2:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter name"
                id="dctm2"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">T. M:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter name"
                id="tm"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">Accountant:</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter name"
                id="accountant"
              />
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default ApprovalForm;
