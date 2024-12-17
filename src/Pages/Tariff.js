import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";

function Tariff() {
  // State to hold costs for tariff fields
  const [costs, setCosts] = useState({
    slpaA: 1350,
    slpaB: 1000,
    slpaC: 500,
    nonSlpaA: 2100,
    nonSlpaB: 1500,
    nonSlpaC: 1000,
    transport: 50,
    plainTea: 30,
    snacks: 100,
    meals: 300,
    certificates: 500,
    teachingAids: 150,
    incidentalExpenses: 200,
    marketingCost: 250,
    maintenanceCost: 300,
  });

  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle editing of costs
  const handleCostChange = (e, field) => {
    setCosts({
      ...costs,
      [field]: e.target.value,
    });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
        {/* Header */}
        <Typography variant="h4" gutterBottom align="center">
          Tariff Portal
        </Typography>

        {/* SLPA Category Tariffs */}
       

        {/* Additional Costs */}
        <Box>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Additional Costs:
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(costs)
              .filter(
                ([key]) =>
                  key !== "slpaA" &&
                  key !== "slpaB" &&
                  key !== "slpaC" &&
                  key !== "nonSlpaA" &&
                  key !== "nonSlpaB" &&
                  key !== "nonSlpaC"
              )
              .map(([key, value]) => (
                <Grid item xs={12} sm={6} key={key}>
                  {isEditing ? (
                    <TextField
                      label={key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={(e) => handleCostChange(e, key)}
                      type="number"
                    />
                  ) : (
                    <Typography>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      : Rs.{value}
                    </Typography>
                  )}
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Change Cost Button */}
        <Box sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color={isEditing ? "success" : "primary"}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Save Changes" : "Change Cost"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Tariff;
