import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function Cd() {
  const [formInputs, setFormInputs] = useState({
    panelMeeting: "",
    refreshments: "",
    documentation: "",
    transport: "",
    incidentalExpenses: "",
  });

  const [currentField, setCurrentField] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [smeInput, setSmeInput] = useState("");
  const [rateInput, setRateInput] = useState("");
  const [total, setTotal] = useState(0); // State to store the total amount

  const handleFieldClick = (field) => {
    setCurrentField(field);
    setSmeInput("");
    setRateInput("");
    setDialogOpen(true);
  };

  const handleCalculate = () => {
    const sme = parseFloat(smeInput) || 0;
    const rate = parseFloat(rateInput) || 0;
    const amount = (sme * rate).toFixed(2);

    setFormInputs((prev) => ({
      ...prev,
      [currentField]: amount,
    }));
    setDialogOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const calculateTotal = () => {
    const sum = Object.values(formInputs).reduce((acc, value) => acc + (parseFloat(value) || 0), 0);
    setTotal(sum.toFixed(2));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>
          Course Development Work
        </Typography>

        <Grid container spacing={2}>
          {["panelMeeting", "refreshments", "documentation", "transport", "incidentalExpenses"].map((field) => (
            <Grid item xs={12} key={field}>
              <TextField
                label={field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} // Display readable labels
                variant="outlined"
                fullWidth
                value={formInputs[field]}
                InputProps={{
                  readOnly: true,
                }}
                onClick={() => handleFieldClick(field)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Calculate Total Button */}
        <Box sx={{ marginY: 3, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={calculateTotal}>
            Calculate Total
          </Button>
        </Box>

        {/* Display Total */}
        {total > 0 && (
          <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
            The Course Development Work - Total Price: ${total}
          </Typography>
        )}

        {/* Dialog for SME's and Rate */}
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Enter Details for {currentField.replace(/([A-Z])/g, " $1")}</DialogTitle>
          <DialogContent>
            <TextField
              label="SME's"
              type="number"
              fullWidth
              value={smeInput}
              onChange={(e) => setSmeInput(e.target.value)}
              margin="dense"
            />
            <TextField
              label="Rate"
              type="number"
              fullWidth
              value={rateInput}
              onChange={(e) => setRateInput(e.target.value)}
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleCalculate} color="primary">
              Calculate
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
}

export default Cd;
