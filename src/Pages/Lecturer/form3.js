import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { CloudUpload, Delete } from "@mui/icons-material";

function Form3() {
  const [uploads, setUploads] = useState({
    nic: null,
    photo: null,
    bankPassBook: null,
    qualification: null,
  });

  const handleFileUpload = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setUploads((prev) => ({ ...prev, [key]: file }));
    }
  };

  const handleDelete = (key) => {
    setUploads((prev) => ({ ...prev, [key]: null }));
  };

  const renderUploadBox = (label, key, isRequired = false) => (
    <Grid item xs={12}>
      <Box
        sx={{
          padding: 3,
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          width: "100%", // Make it full width
          marginBottom: "0px", // Add spacing between boxes
        }}
      >
        <Box>
          <Typography variant="subtitle2">
            {label} {isRequired && <span style={{ color: "red" }}>*</span>}
          </Typography>
          {uploads[key] ? (
            <Typography variant="body2" color="textSecondary">
              {uploads[key].name}
            </Typography>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Drag and Drop your file
            </Typography>
          )}
        </Box>
        <Box mt={2}>
          {!uploads[key] ? (
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUpload />}
            >
              Upload
              <input
                type="file"
                hidden
                accept=".jpg, .jpeg, .pdf"
                onChange={(e) => handleFileUpload(e, key)}
              />
            </Button>
          ) : (
            <IconButton
              color="error"
              onClick={() => handleDelete(key)}
              aria-label="delete"
            >
              <Delete />
            </IconButton>
          )}
        </Box>
      </Box>
    </Grid>
  );

  return (
    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: "1200px", // Adjust the width of the form
        margin: "auto", // Center the form horizontally
        marginTop: "50px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: 2 }}
      >
        Uploads
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ marginBottom: 3 }}
      >
        Allowed file extensions: jpg, jpeg, pdf | Max file size: 300 kb
      </Typography>

      <Grid container spacing={2}>
        {renderUploadBox("NIC / PP", "nic", true)}
        {renderUploadBox("Photo (Passport Size)", "photo", true)}
        {renderUploadBox(
          "Bank Pass Book (Letter from bank with account details)",
          "bankPassBook",
          true
        )}
        {renderUploadBox(
          "Highest Educational Qualification",
          "qualification",
          true
        )}
      </Grid>

      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
      
      </Box>
    </Box>
  );
}

export default Form3;
