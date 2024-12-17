import React, { useState } from "react";
import { Box, Typography, TextField,  } from "@mui/material";



function Application3() {
  
  const [formData, setFormData] = useState({
    nic: null,
    passport: null,
    photo: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
  };


  return (
    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: "auto",
        margin: "auto",
        marginLeft: "0px",
        marginTop: "85px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Upload Documents
      </Typography>

      {/* NIC File Upload */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        NIC *
      </Typography>
      <TextField
        fullWidth
        type="file"
        onChange={(e) => handleFileChange(e, "nic")}
        required
        sx={{ marginBottom: 2 }}
      />

      {/* Passport File Upload */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Passport
      </Typography>
      <TextField
        fullWidth
        type="file"
        onChange={(e) => handleFileChange(e, "passport")}
        sx={{ marginBottom: 2 }}
      />

      {/* Photo File Upload */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Photo (Passport size) *
      </Typography>
      <TextField
        fullWidth
        type="file"
        onChange={(e) => handleFileChange(e, "photo")}
        required
        sx={{ marginBottom: 2 }}
      />



    </Box>
  );
}

export default Application3;