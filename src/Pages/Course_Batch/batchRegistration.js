import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const BatchRegistration = () => {
  const [batches, setBatches] = useState([]);

  const handleAddBatch = () => {
    const newBatch = {
      id: batches.length + 1,
      name: `Batch ${batches.length + 1}`,
    };
    setBatches([...batches, newBatch]);
  };

  return (
    <Box sx={{ padding: 4, display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Page Title */}
      <Typography variant="h5" fontWeight="bold">
        Course & Batch Management
      </Typography>
      <Typography variant="subtitle1">
        Home / Course & Batch Management / Batch Registration
      </Typography>

      {/* Batch Registration Section */}
      <Box
        sx={{
          border: "1px solid #1976d2",
          borderRadius: 2,
          padding: 2,
          height: "400px",
          overflowY: "auto",
        }}
      >
        {/* Add New Batch Button */}
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleAddBatch}
          sx={{ marginBottom: 2 }}
        >
          Add New Batch
        </Button>

        {/* Batch List */}
        {batches.map((batch) => (
          <Card key={batch.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="body1">{batch.name}</Typography>
            </CardContent>
            <CardActions>
              <Button color="error" size="small">
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined">Back</Button>
        <Button variant="contained">Next</Button>
      </Stack>
    </Box>
  );
};

export default BatchRegistration;