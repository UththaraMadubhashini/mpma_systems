import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Function to convert a number to words
const numberToWords = (num) => {
  const units = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];
  const thousands = [
    "", "Thousand", "Million", "Billion", "Trillion"
  ];

  if (num === 0) return "Zero";

  let word = "";
  let groupIndex = 0;

  // Split number into groups of 3 digits (thousands, millions, etc.)
  while (num > 0) {
    if (num % 1000 !== 0) {
      word = convertGroup(num % 1000) + (thousands[groupIndex] ? " " + thousands[groupIndex] : "") + " " + word;
    }
    num = Math.floor(num / 1000);
    groupIndex++;
  }

  return word.trim();
};

// Function to convert numbers less than 1000 into words
const convertGroup = (num) => {
  const units = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  let word = "";

  if (num >= 100) {
    word += units[Math.floor(num / 100)] + " Hundred ";
    num %= 100;
  }

  if (num >= 20) {
    word += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 0) {
    word += units[num];
  }

  return word.trim();
};

function Calculate() {
  const [userInputs, setUserInputs] = useState({
    transport: "",
    plainTea: "",
    snacks: "",
    meals: "",
    certificates: "",
    teachingAids: "",
    incidentalExpenses: "",
    marketingCost: "",
    maintenanceCost: "",
  });
  const [totalLKR, setTotalLKR] = useState(null);
  const [totalLKRInWords, setTotalLKRInWords] = useState("");

  // Sample prices that were passed from Tariff.js
  const [tariffPrices, setTariffPrices] = useState({
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

  const navigate = useNavigate();

  // Handle user input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate LKR by multiplying user input values with sample prices from Tariff
  const calculateLKR = () => {
    let total = 0;
    for (let field in userInputs) {
      const userValue = parseFloat(userInputs[field]) || 0;
      const tariffValue = tariffPrices[field] || 0;
      total += userValue * tariffValue;
    }
    setTotalLKR(total.toFixed(2));

    // Convert the total to words
    setTotalLKRInWords(numberToWords(total));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>
          Enter Values to Calculate Total Cost
        </Typography>

        <Grid container spacing={2}>
          {Object.entries(userInputs).map(([key, value]) => (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                label={key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                variant="outlined"
                fullWidth
                name={key}
                value={value}
                onChange={handleInputChange}
                type="number"
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginY: 3, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={calculateLKR}
          >
            Calculate Total
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/tariff")}
          >
            Back to Tariff Portal
          </Button>
        </Box>

        {/* Display the calculated total */}
        {totalLKR !== null && (
          <Typography variant="h6" sx={{ textAlign: "center", marginTop: 2 }}>
            Total: LKR {totalLKR} ({totalLKRInWords})
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default Calculate;
