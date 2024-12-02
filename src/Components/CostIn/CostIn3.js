import React from "react";
import { Grid, TextField, Typography, Box } from "@mui/material";

function OverheadCostsForm() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
        Cost For Overheads - C
      </Typography>
      <Grid container spacing={1}>
        {/* Total Estimated Cost */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Total Estimated Cost (A + B + C)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
          />
        </Grid>

        {/* Provision For Inflation */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Provision For Inflation - 5%
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
          />
        </Grid>

        {/* Full Cost */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Full Cost
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
          />
        </Grid>

        {/* NBT */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            NBT
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
          />
        </Grid>

        {/* Profit Margin */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Profit Margin - 20%
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
          />
        </Grid>

        {/* Cost Fee Per Head */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Cost Fee Per Head
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
          />
          <Typography variant="body1" style={{ marginLeft: "8px" }}>
            / 13
          </Typography>
        </Grid>

        {/* Total Course Fee */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Total Course Fee For The Batch of the 13 Less Participants
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OverheadCostsForm;
